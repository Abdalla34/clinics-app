<template>
  <div
    class="row g-0 justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="col-auto">
      <div class="text-center fix">
        <img v-if="!isEmail" src="/public/Eadaty main logo 3.jpg" alt="Logo" />
        <h1 v-if="!isEmail" class="title">Reset your password</h1>
        <p v-if="!isEmail" class="font-size">
          Enter your email address and we’ll send you password reset
          instructions.
        </p>
      </div>
      <div class="parent-form">
        <div class="fix mt-4">
          <form @submit.prevent="onSubmit" class="position-relative">
            <div v-if="!isEmail">
              <label class="label mb-1 text-capitalize" for=""
                >Registered Email</label
              >
              <input
                v-if="!isEmail"
                type="text"
                class="input"
                v-model="email"
              />
              <p class="text-danger font-size" v-if="errors.email">
                {{ errors.email }}
              </p>
              <BtnLogin :class="{ 'btn-active': email }" />
            </div>
          </form>
            <InputPass v-if="isEmail" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "cretedPassword",
});
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string()
    .required("This IS Field This IS Required")
    .email("Please Enter a Valide Email"),
});
const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});
const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
  if (values.email) {
    localStorage.setItem("email", JSON.stringify(values.email));
    isEmail.value = true;
    resetForm();
  }
});
const btn = useState("Btn", () => "");
btn.value = "confirm";
const isEmail = ref(false);
</script>
<style scoped>
img {
  max-width: 100px;
  max-height: 100px;
}
.fix {
  width: 95%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
