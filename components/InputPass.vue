<template>
  <div class="position-relative">
    <div v-if="!Active">
      <img
        class="img-Created"
        src="/public/Eadaty main logo 3.jpg"
        alt="Logo"
      />
      <h1 class="title text-center">Update your password</h1>
      <p class="font-size text-center">
        Set your new password with minimum 8 characters with a combination of
        letters and numbers
      </p>
      <form @submit.prevent="onSubmit">
        <div>
          <label class="label" for="">new password</label>
          <input
            :type="isPass ? 'text' : 'Password'"
            class="w-100 input"
            placeholder="write your new password"
            v-model="Password"
          />
          <i
            :class="isPass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            @click="showPass"
            class="icon"
          ></i>
          <p v-if="errors.Password" class="text-danger font-size">
            {{ errors.Password }}
          </p>
          <ul v-if="Password">
            <li
              :style="{ color: condition.boolean ? 'green' : 'red' }"
              class="font-size"
              v-for="(condition, index) in validations"
              :key="index"
            >
              {{ condition.message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <label class="label" for="">Confirmation New Password</label>
          <input
            :type="isPassMatch ? 'text' : 'Password'"
            class="w-100 input"
            placeholder="write your new password"
            v-model="confirmation"
          />
          <i
            :class="isPassMatch ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            class="icon"
            @click="PassMatch"
          ></i>
          <p v-if="errors.confirmation" class="text-danger font-size">
            {{ errors.confirmation }}
          </p>
        </div>
        <BtnLogin :class="{ 'btn-active': Password && confirmation }" />
      </form>
    </div>
    <div v-if="Active">
      <CodeForm />
    </div>
  </div>
</template>
<script setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const btn = useState("Btn", () => "");
btn.value = "submit";
const schema = yup.object({
  Password: yup.string().required("This is Required").min(8, "8 Chracter"),
  confirmation: yup
    .string()
    .required("This is Required")
    .oneOf([yup.ref("Password")], "Password Must Match"),
});
const { handleSubmit, errors, resteForm } = useForm({
  validationSchema: schema,
});
const { value: Password } = useField("Password");
const { value: confirmation } = useField("confirmation");
const Active = ref(false);
const isPass = ref(false);
const isPassMatch = ref(false);
function showPass() {
  isPass.value = !isPass.value;
}
function PassMatch() {
  isPassMatch.value = !isPassMatch.value;
}
const validations = computed(() => [
  {
    boolean: Password.value && Password.value.length >= 8,
    message: "Password Must 8 Chracter longer ",
  },
  {
    boolean: /[A-Z]/.test(Password.value),
    message: "UpperCase Latter",
  },
  {
    boolean: /[a-z]/.test(Password.value),
    message: "LowerCase Latter",
  },
  {
    boolean: /\d/.test(Password.value),
    message: "Number (0-9)",
  },
]);
const onSubmit = handleSubmit((values) => {
  if (values.Password && values.confirmation) {
    console.log(values.Password);
    Active.value = true;
  }
});
</script>
<style scoped>
.img-done {
  width: 150px;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.img-hand {
  width: 100px;
  margin-bottom: 12px;
}
.title {
  font-size: 20px;
}
</style>
