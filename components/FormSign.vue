<template>
  <div class="created">
    <div class="padding-margin parent">
      <form @submit.prevent="onSubmit">
        <div class="margin-bottom">
          <label class="label" for="">Name</label>
          <input
            type="text"
            class="input"
            placeholder="write your name"
            v-model="name"
          />
          <p
            class="text-danger paragraph-error text-capitalize"
            v-if="errors.name"
          >
            {{ errors.name }}
          </p>
        </div>
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
        <div>
          <BtnLogin :class="{ 'btn-active': name && email && password }" />
        </div>
        <div class="login-with position-relative">
          <h6
            class="text-capitalize font-size secound-color fw-bold title-with"
          >
            or login with
          </h6>
        </div>
        <div><Icon-BtnLinks /></div>
        <div class="account-created text-center mt-3">
          <div class="created font-size secound-color fw-bold">
            You're new here?
            <span class="color-main fw-bold" style="cursor: pointer"
              >Create account</span
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const isPassword = ref(false);
const btn = useState("Btn", () => "");
btn.value = "create account";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string()
    .required("this is field this is required")
    .email("please enter a validate email address"),
  password: yup
    .string()
    .required("this is field this is required")
    .min(8, "you must be a laest 8 charcter longer"),
  name: yup
    .string()
    .required("this is field this is required")
    .min(3, "name must be a laest 3 charcter long"),
});
const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: name } = useField("name");
const onSubmit = handleSubmit((values) => {
  if (values.email && values.password && values.name) {
    console.log(email.value);
    console.log(password.value);
    console.log(name.value);
    resetForm();
  }
});
function ShowisPassword() {
  isPassword.value = !isPassword.value;
}
</script>
