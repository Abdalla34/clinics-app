<template>
  <div class="updat-pass position-absolute fix-position">
    <div class="row justify-content-center">
      <div class="col-9">
        <titleForget />
      </div>
      <div class="col-9">
        <form @submit.prevent="onSubmit" class="input-email">
          <div class="mt-3 Pass position-relative">
            <label for="" class="label mb-2 text-capitalize"
              >new password</label
            >
            <input
              :type="showPass ? 'text' : 'password'"
              class="input"
              :class="{ 'is-valide': errors.password }"
              v-model="password"
            />
            <p
              class="font-12px text-danger text-capitalize"
              v-if="errors.password"
            >
              {{ errors.password }}
            </p>
            <ul v-if="password">
              <li
                class="font-12px"
                v-for="(list, index) in listsCondition"
                :key="index"
                :class="list.boolean ? 'green' : 'red'"
              >
                {{ list.message }}
              </li>
            </ul>
            <i
              @click="toogleIcon"
              class="icon-eye"
              :class="{
                'fa-solid fa-eye-slash': !showPass,
                'fa-solid fa-eye': showPass,
              }"
            ></i>
          </div>
          <div class="mt-3 confirmation position-relative">
            <label for="" class="label mb-2 text-capitalize"
              >confirmation</label
            >
            <input
              :type="showConfirmation ? 'text' : 'password'"
              class="input"
              :class="{ 'is-valide': errors.confirmation }"
              v-model="confirmation"
            />
            <p
              class="font-12px text-danger text-capitalize"
              v-if="errors.confirmation"
            >
              {{ errors.confirmation }}
            </p>
            <i
              @click="ConfirmationIcon"
              class="icon-eye"
              :class="{
                'fa-solid fa-eye-slash': !showConfirmation,
                'fa-solid fa-eye': showConfirmation,
              }"
            ></i>
          </div>
          <BtnLogin
            :class="{
              'background-main': password && confirmation === password,
            }"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "UpdatePassword",
});
const { state: showPass, toogle: toogleIcon } = useToogle();
const { state: showConfirmation, toogle: ConfirmationIcon } = useToogle();
const btnLogin = useState("btnlog", () => "");
btnLogin.value = "submit";
const title = useState("title", () => "");
title.value = "Update your password";
const parag = useState("parag", () => "");
parag.value =
  "Set your new password with minimum 8 characters with a combination of letters and numbers";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  password: yup
    .string()
    .required("this is required")
    .min(8, "Password Must at Least 8 chracter longer"),
  confirmation: yup
    .string()
    .required("this is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});
const { value: password } = useField("password");
const { value: confirmation } = useField("confirmation");
const onSubmit = handleSubmit((values) => {
  if (values.password && values.confirmation) {
    navigateTo("/authentication");
    localStorage.setItem("newPass", JSON.stringify(values.password));
  }
});
const listsCondition = computed(() => [
  {
    boolean: /[A-Z]/.test(password.value),
    message: "Password Must at Least UpperCase",
  },
  {
    boolean: /[a-z]/.test(password.value),
    message: "Password Must at Least Lowercase",
  },
  {
    boolean: /\d+/.test(password.value),
    message: "Password Must writ number like (0-9)",
  },
]);
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
