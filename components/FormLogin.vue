<template>
  <div class="form-login">
    <!-- <form @submit.prevent="onSubmit">
      <div class="email mb-3">
        <label class="text-capitalize font-size label pb-1" for=""
          >email adrees</label
        >
        <input
          class="input"
          :class="{ 'is-valide': errors.email || registered }"
          type="email"
          placeholder="input your registered email"
          v-model="email"
        />
        <p v-if="errors.email" class="text-capitalize text-danger font-12px">
          {{ errors.email }}
        </p>
        <p v-if="registered" class="text-capitalize text-danger font-12px">
          this email not regestred
        </p>
      </div>
      <div class="Pass position-relative">
        <label class="text-capitalize font-size label pb-1" for=""
          >Password</label
        >
        <input
          class="input"
          :class="{ 'is-valide': errors.password || passNotDone }"
          :type="showPass ? 'text' : 'password'"
          placeholder="input your Password account"
          v-model="password"
        />
        <p v-if="errors.password" class="text-capitalize text-danger font-12px">
          {{ errors.password }}
        </p>
        <p v-if="passNotDone" class="text-capitalize text-danger font-12px">
          this passowrd not done
        </p>
        <i
          @click="toogleIconShow"
          class="icon-eye"
          :class="{
            'fa-solid fa-eye': showPass,
            'fa-solid fa-eye-slash': !showPass,
          }"
        ></i>
      </div>
      <div class="remember mt-3 d-flex justify-content-between">
        <div class="input-check d-flex gap-1 align-items-center">
          <label for="remember" class="font-12px text-capitalize">
            <input id="remember" type="checkbox" style="cursor: pointer" />
            remember me
          </label>
        </div>
        <div
          @click="navigateTo('/forgetPassword')"
          class="forget"
          style="cursor: pointer"
        >
          <p class="color-main-text text-capitalize font-12px opacity">
            forget Password ?
          </p>
        </div>
      </div>
      <BtnLogin :class="{ 'background-active': email && password }" />
      <div class="links d-flex justify-content-between mt-3">
        <div class="google btn-links d-flex align-items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1259 11.2139C21.1259 10.4225 21.0604 9.84497 20.9186 9.24609H11.6974V12.818H17.11C17.001 13.7057 16.4117 15.0425 15.1021 15.9408L15.0838 16.0603L17.9993 18.2738L18.2013 18.2936C20.0565 16.6145 21.1259 14.1441 21.1259 11.2139Z"
              fill="#4285F4"
            />
            <path
              d="M11.6968 20.6248C14.3485 20.6248 16.5747 19.7692 18.2007 18.2934L15.1015 15.9405C14.2722 16.5073 13.159 16.903 11.6968 16.903C9.09958 16.903 6.89524 15.224 6.10945 12.9033L5.99427 12.9129L2.96262 15.2122L2.92297 15.3202C4.53803 18.4644 7.85548 20.6248 11.6968 20.6248Z"
              fill="#34A853"
            />
            <path
              d="M6.11006 12.9038C5.90272 12.305 5.78273 11.6632 5.78273 11.0002C5.78273 10.3371 5.90272 9.69549 6.09915 9.09661L6.09366 8.96906L3.024 6.63281L2.92357 6.67963C2.25792 7.98437 1.87598 9.44953 1.87598 11.0002C1.87598 12.5509 2.25792 14.016 2.92357 15.3207L6.11006 12.9038Z"
              fill="#FBBC05"
            />
            <path
              d="M11.6968 5.09664C13.541 5.09664 14.7851 5.87733 15.4944 6.52974L18.2662 3.8775C16.5639 2.32681 14.3486 1.375 11.6968 1.375C7.85551 1.375 4.53804 3.53526 2.92297 6.6794L6.09856 9.09638C6.89526 6.77569 9.09961 5.09664 11.6968 5.09664Z"
              fill="#EB4335"
            />
          </svg>
          <span class="font-size text-capitalize">google</span>
        </div>
        <div class="apple btn-links d-flex align-items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3744 7.50391C19.2653 7.56519 16.6672 8.85841 16.6672 11.7258C16.7897 14.9959 19.9459 16.1427 20 16.1427C19.9459 16.2039 19.5235 17.7049 18.2724 19.2783C17.2795 20.6336 16.1775 22 14.504 22C12.9121 22 12.3407 21.0967 10.504 21.0967C8.53147 21.0967 7.97335 22 6.46314 22C4.78967 22 3.60599 20.5603 2.55896 19.2178C1.19871 17.4606 0.0425398 14.703 0.00172334 12.0553C-0.0257834 10.6522 0.274128 9.27304 1.03544 8.10158C2.10998 6.46614 4.02835 5.35595 6.1233 5.31935C7.72845 5.2708 9.15703 6.30777 10.1366 6.30777C11.0754 6.30777 12.8305 5.31935 14.8163 5.31935C15.6735 5.32014 17.9592 5.55173 19.3744 7.50391ZM10.0009 5.03921C9.71515 3.75792 10.504 2.47663 11.2387 1.65931C12.1774 0.670887 13.6601 0 14.9388 0C15.0204 1.28129 14.5031 2.53791 13.5785 3.45312C12.7489 4.44154 11.3203 5.18565 10.0009 5.03921Z"
              fill="#111827"
            />
          </svg>
          <span class="font-size text-capitalize">Apple</span>
        </div>
      </div>
      <div class="create-acc d-flex justify-content-center mt-4 gap-1">
        <p class="second-color-text text-capitalize font-12px">
          your new in here ?
        </p>
        <p
          @click.prevent="navigateTo('/signup')"
          class="text-capitalize color-main-text font-12px opacity"
          style="cursor: pointer"
        >
          create account
        </p>
      </div>
    </form> -->
    <form @submit.prevent="onSubmit">
      <div class="email mb-3">
        <label class="text-capitalize font-size label pb-1" for=""
          >email adrees</label
        >
        <input
          class="input"
          :class="{ 'is-valide': errors.email }"
          type="email"
          placeholder="input your registered email"
          v-model="email"
        />
        <p v-if="errors.email" class="text-capitalize text-danger font-12px">
          {{ errors.email }}
        </p>
        <p v-if="registered" class="text-capitalize text-danger font-12px">
          this email not regestred
        </p>
      </div>
      <div class="Pass position-relative">
        <label class="text-capitalize font-size label pb-1" for=""
          >Password</label
        >
        <input
          class="input"
          :class="{ 'is-valide': errors.password || passNotDone }"
          :type="showPass ? 'text' : 'password'"
          placeholder="input your Password account"
          v-model="password"
        />
        <p v-if="errors.password" class="text-capitalize text-danger font-12px">
          {{ errors.password }}
        </p>
        <p v-if="passNotDone" class="text-capitalize text-danger font-12px">
          this passowrd not done
        </p>
        <i
          @click="toogleIcon"
          class="icon-eye"
          :class="{
            'fa-solid fa-eye': showPass,
            'fa-solid fa-eye-slash': !showPass,
          }"
        ></i>
      </div>
      <div class="remember mt-3 d-flex justify-content-between">
        <div class="input-check d-flex gap-1 align-items-center">
          <label for="remember" class="font-12px text-capitalize">
            <input id="remember" type="checkbox" style="cursor: pointer" />
            remember me
          </label>
        </div>
        <div
          @click="navigateTo('/forgetPassword')"
          class="forget"
          style="cursor: pointer"
        >
          <p class="color-main-text text-capitalize font-12px opacity">
            forget Password ?
          </p>
        </div>
      </div>
      <BtnLogin :class="{ 'background-active': email && password }" />
      <div class="links d-flex justify-content-between mt-3">
        <div class="google btn-links d-flex align-items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1259 11.2139C21.1259 10.4225 21.0604 9.84497 20.9186 9.24609H11.6974V12.818H17.11C17.001 13.7057 16.4117 15.0425 15.1021 15.9408L15.0838 16.0603L17.9993 18.2738L18.2013 18.2936C20.0565 16.6145 21.1259 14.1441 21.1259 11.2139Z"
              fill="#4285F4"
            />
            <path
              d="M11.6968 20.6248C14.3485 20.6248 16.5747 19.7692 18.2007 18.2934L15.1015 15.9405C14.2722 16.5073 13.159 16.903 11.6968 16.903C9.09958 16.903 6.89524 15.224 6.10945 12.9033L5.99427 12.9129L2.96262 15.2122L2.92297 15.3202C4.53803 18.4644 7.85548 20.6248 11.6968 20.6248Z"
              fill="#34A853"
            />
            <path
              d="M6.11006 12.9038C5.90272 12.305 5.78273 11.6632 5.78273 11.0002C5.78273 10.3371 5.90272 9.69549 6.09915 9.09661L6.09366 8.96906L3.024 6.63281L2.92357 6.67963C2.25792 7.98437 1.87598 9.44953 1.87598 11.0002C1.87598 12.5509 2.25792 14.016 2.92357 15.3207L6.11006 12.9038Z"
              fill="#FBBC05"
            />
            <path
              d="M11.6968 5.09664C13.541 5.09664 14.7851 5.87733 15.4944 6.52974L18.2662 3.8775C16.5639 2.32681 14.3486 1.375 11.6968 1.375C7.85551 1.375 4.53804 3.53526 2.92297 6.6794L6.09856 9.09638C6.89526 6.77569 9.09961 5.09664 11.6968 5.09664Z"
              fill="#EB4335"
            />
          </svg>
          <span class="font-size text-capitalize">google</span>
        </div>
        <div class="apple btn-links d-flex align-items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3744 7.50391C19.2653 7.56519 16.6672 8.85841 16.6672 11.7258C16.7897 14.9959 19.9459 16.1427 20 16.1427C19.9459 16.2039 19.5235 17.7049 18.2724 19.2783C17.2795 20.6336 16.1775 22 14.504 22C12.9121 22 12.3407 21.0967 10.504 21.0967C8.53147 21.0967 7.97335 22 6.46314 22C4.78967 22 3.60599 20.5603 2.55896 19.2178C1.19871 17.4606 0.0425398 14.703 0.00172334 12.0553C-0.0257834 10.6522 0.274128 9.27304 1.03544 8.10158C2.10998 6.46614 4.02835 5.35595 6.1233 5.31935C7.72845 5.2708 9.15703 6.30777 10.1366 6.30777C11.0754 6.30777 12.8305 5.31935 14.8163 5.31935C15.6735 5.32014 17.9592 5.55173 19.3744 7.50391ZM10.0009 5.03921C9.71515 3.75792 10.504 2.47663 11.2387 1.65931C12.1774 0.670887 13.6601 0 14.9388 0C15.0204 1.28129 14.5031 2.53791 13.5785 3.45312C12.7489 4.44154 11.3203 5.18565 10.0009 5.03921Z"
              fill="#111827"
            />
          </svg>
          <span class="font-size text-capitalize">Apple</span>
        </div>
      </div>
      <div class="create-acc d-flex justify-content-center mt-4 gap-1">
        <p class="second-color-text text-capitalize font-12px">
          your new in here ?
        </p>
        <p
          @click.prevent="navigateTo('/signup')"
          class="text-capitalize color-main-text font-12px opacity"
          style="cursor: pointer"
        >
          create account
        </p>
      </div>
    </form>
  </div>
</template>
<script setup>
const btnLogin = useState("btnlog", () => "");
btnLogin.value = "login";
const registered = ref(false);
const passNotDone = ref(false);
const { state: showPass, toogle: toogleIcon } = useToogle();
// const { state: showPass, toggle: toogleIconShow } = useToggle();
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string("")
    .required("this is required")
    .email("Please enter a valide email"),
  password: yup
    .string("")
    .required("this is required")
    .min(8, "you must a lease 8 charcter longer "),
});
const { handleSubmit, errors } = useForm({ validationSchema: schema });
const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
  if (values.email && values.password.length >= 8) {
    const allAcoounts = JSON.parse(localStorage.getItem("account")) || [];
    const items = allAcoounts.find((item) => item.email === values.email);
    if (items) {
      if (items.Pass === values.password) {
        navigateTo("/myclinic");
      } else {
        passNotDone.value = true;
      }
    } else {
      registered.value = true;
    }
  }
});
// const onSubmit = handleSubmit((values) => {
//   if (values.email && values.password) {
//     const allAccount = JSON.parse(localStorage.getItem("account")) || [];
//     const findAccount = allAccount.find(
//       (Account) => Account.email === values.email
//     );
//     if (findAccount) {
//       if (findAccount.Pass !== values.password) {
//         passNotDone.value = true;
//         registered.value = false;
//       } else {
//         navigateTo("/myclinic");
//       }
//     } else {
//       registered.value = true;
//       passNotDone.value = false;
//     }
//   }
// });
</script>
<style scoped>
.btn-links {
  border: 1px solid var(--second-color);
  padding: 4px 12px;
  border-radius: 10px;
}
/* .isValid {
  border: 1px solid red;
} */
</style>
