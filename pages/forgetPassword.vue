<template>
  <div class="forget-pass position-absolute fix-position">
    <div class="row align-items-center justify-content-center">
      <div class="col-9">
        <titleForget />
      </div>
      <div class="col-9 mt-2">
        <form @submit.prevent="onSubmit" class="input-email">
          <label for="" class="label mb-2">Registered Email</label>
          <input
            type="text"
            class="input"
            v-model="email"
            :class="{ 'is-valide': errors.email }"
          />
          <p class="font-12px text-danger text-capitalize" v-if="errors.email">
            {{ errors.email }}
          </p>
          <p class="font-12px text-danger text-capitalize" v-if="registered">
            this email not registered
          </p>
          <BtnLogin :class="{ 'background-main': email }" />
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "forgetPAssword",
});
const title = useState("title", () => "");
title.value = "Reset your password";
const parag = useState("parag", () => "");
parag.value =
  "Enter your email address and we’ll send you password reset instructions.";
const btnLogin = useState("btnlog", () => "");
const registered = ref(false);
btnLogin.value = "confirm";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string()
    .required("this is required")
    .email("plese enter a valide email"),
});
const { handleSubmit, errors } = useForm({ validationSchema: schema });
const { value: email } = useField("email");
const onSubmit = handleSubmit((values) => {
  if (values.email) {
    const accountsStorge = JSON.parse(localStorage.getItem("account"));
    const findEmail = accountsStorge.find(
      (item) => item.email === values.email
    );
    if (findEmail) {
      if (findEmail.email === values.email) {
        navigateTo("/updatePassword");
        registered.value = false;
        localStorage.setItem("emailLog", JSON.stringify(findEmail.email));
      }
    } else {
      registered.value = true;
    }
  }
});
</script>
<style scoped></style>
