<template>
  <div class="otp fix-position position-absolute">
    <div class="row align-items-center justify-content-center">
      <div class="col-9">
        <titleForget />
        <p class="font-12px color-main-text text-center">
          {{ emailLogin }}
        </p>
        <form @submit.prevent="onSubmit">
          <div class="d-flex justify-content-center gap-3 mt-3">
            <input
              v-for="(input, index) in inputsCode"
              :key="index"
              type="text"
              placeholder=""
              maxlength="1"
              v-model="inputsCode[index]"
              class="input input-4 text-center handDom"
              @input="nextToElm(index)"
              @keydown.backspace="prevElm(index)"
            />
          </div>
          <p
            v-if="showError && !isErrorCode"
            class="text-danger font-12px text-center pt-2"
          >
            Code Not True
          </p>
          <BtnLogin />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = useState("title", () => "");
title.value = "OTP Verification";
const parag = useState("parag", () => "");
parag.value = "We have sent a verification code to email address ";
const emailLogin = ref();
const active = ref(false);
const btnLogin = useState("btnlog", () => "");
btnLogin.value = "submit";
const inputsCode = ref(["", "", "", ""]);
const showError = ref(false);
const codeNum = ref(1234);
const isErrorCode = computed(() => {
  const numbersCode = inputsCode.value.join("");
  return numbersCode === codeNum.value.toString();
});
const onSubmit = () => {
  if (inputsCode.value.join("") === codeNum.value.toString()) {
    console.log("Equal codeNum");
    showError.value = false;
  } else {
    console.log("Not Equal codeNum");
    showError.value = true;
  }
};
function nextToElm(handIndex) {
  if (inputsCode.value[handIndex] !== "") {
    if (handIndex < inputsCode.value.length - 1) {
      const indexText = document.querySelectorAll(".input")[handIndex + 1];
      if (indexText) indexText.focus();
    }
  }
}
function prevElm(currentindex) {
  if (inputsCode.value[currentindex] === "") {
    if (currentindex > 0) {
      const prevElm = document.querySelectorAll(".input")[currentindex - 1];
      if (prevElm) prevElm.focus();
    }
  }
}
onMounted(() => {
  emailLogin.value = JSON.parse(localStorage.getItem("emailLog"));
});
watch(inputsCode, () => {
  if (inputsCode.value.join("") !== "") {
    showError.value = true;
  }
});
</script>

<style scoped>
.input-4 {
  width: 50px;
}
.green {
  color: green;
}
@media (max-width: 576px) {
  .input-4 {
    width: 50px;
  }
}
</style>
