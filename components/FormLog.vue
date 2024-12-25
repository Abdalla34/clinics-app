<template>
  <div class="padding-margin parent">
    <form @submit.prevent="onSubmit">
      <div class="margin-bottom">
        <label class="label" for="">Email</label>
        <input
          class="input"
          type="email"
          placeholder="write your email"
          v-model="email"
        />
        <p
          class="text-danger paragraph-error text-capitalize"
          v-if="errors.email"
        >
          {{ errors.email }}
        </p>
      </div>
      <div class="margin-bottom position-relative">
        <label class="label" for="">Password</label>
        <input
          class="input"
          :type="isPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="write your password"
        />
        <i
          class="icon"
          :class="isPassword ? 'fa-solid fa-eye' : 'fa-regular fa-eye-slash'"
          @click="ShowisPassword"
        ></i>
        <p
          class="text-danger paragraph-error text-capitalize"
          v-if="errors.password"
        >
          {{ errors.password }}
        </p>
      </div>
      <div class="cheack d-flex justify-content-between font-size">
        <div class="d-flex gap-1 text-capitalize">
          <input class="input-check" type="checkbox" />
          <span class="checkmark"></span>
          <label for="">remember me</label>
        </div>
        <div
          class="text-capitalize color-main"
          @click.prevent="navigateTo('/CreatePassword')"
          style="cursor: pointer"
        >
          forget Password?
        </div>
      </div>
      <div>
        <BtnLogin :class="{ 'btn-active': isValideTest }" />
      </div>
      <div class="login-with position-relative">
        <h6 class="text-capitalize font-size secound-color fw-bold title-with">
          or login with
        </h6>
      </div>
      <div><Icon-BtnLinks /></div>
      <div class="account-created text-center mt-3">
        <div class="created font-size secound-color fw-bold">
          You're new here?
          <span
            @click.prevent="navigateTo('/about')"
            class="color-main fw-bold"
            style="cursor: pointer"
            >Create account</span
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const btn = useState("Btn", () => "");
btn.value = "login";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string()
    .required("this is field this is required")
    .email("please enter a validate email address "),
  password: yup
    .string()
    .required("this is required")
    .min(8, "Please you must be a least 8 chracter longer "),
});
const isValideTest = computed(() => {
  return email.value && password.value && password.value.length >= 8;
});
const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});
const { value: email } = useField("email");
const { value: password } = useField("password");
const onSubmit = handleSubmit((values) => {
  console.log(values.email);
  console.log(values.password);
  resetForm();
  return navigateTo("/step");
});
const isPassword = ref(false);
function ShowisPassword() {
  isPassword.value = !isPassword.value;
}
</script>
