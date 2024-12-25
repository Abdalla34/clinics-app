<template>
  <div>
    <div class="code text-center" v-if="!OtpValide">
      <div>
        <img class="img-hand" src="/public/Eadaty main logo 3.jpg" alt="Logo" />
        <h1 class="title">OTP verifiction</h1>
        <p class="font-size text-center">
          We have sent a verification code to email address
          <span class="fw-bold color-main"> {{ emailEntered }}</span>
        </p>
      </div>
      <div class="OTP-inputs">
        <form @submit.prevent="onSubmit">
          <div class="d-flex justify-content-center mt-2 w-100 form-gap">
            <input
              type="text"
              maxlength="1"
              class="input-width input text-center"
              @input="nextTo"
              @keydown.backspace="Prev"
              v-model="PassOne"
            />
            <input
              type="text"
              maxlength="1"
              class="input-width input text-center"
              @input="nextTo"
              @keydown.backspace="Prev"
              v-model="PassTwo"
            />
            <input
              type="text"
              maxlength="1"
              class="input-width input text-center"
              @input="nextTo"
              @keydown.backspace="Prev"
              v-model="PassThree"
            />
            <input
              type="text"
              maxlength="1"
              class="input-width input text-center"
              @input="nextTo"
              @keydown.backspace="Prev"
              v-model="PassFour"
            />
          </div>
          <div v-if="PassOne && PassTwo && PassThree && PassFour">
            <span
              class="text-danger"
              v-if="
                (PassOne != 1) |
                  (PassTwo != 2) |
                  (PassThree != 3) |
                  (PassFour != 4)
              "
            >
              Not confirmation
            </span>
          </div>
          <BtnLogin
            :class="{
              'btn-active':
                PassOne == 1 && PassTwo == 2 && PassThree == 3 && PassFour == 4,
            }"
          />
        </form>
      </div>
    </div>
    <div class="Successfully" v-if="OtpValide">
      <img class="img-done" src="public/Illustration.png" alt="" />
      <h1 class="title text-center">Your successfully changed your password</h1>
      <p class="font-size text-center mb-4">
        Always remember the password for your account at Eadaty !
      </p>
      <BtnLogin
        :class="{ 'btn-active': OtpValide }"
        @click.prevent="navigateTo('/')"
      />
    </div>
  </div>
</template>
<script setup>
const btn = useState("Btn", () => "");
const PassOne = ref();
const PassTwo = ref();
const PassThree = ref();
const PassFour = ref();
const OtpValide = ref(false);
const codeDetails = ref(false);
const emailEntered = ref(localStorage.getItem("email"));

const onSubmit = () => {
  const codeNum = `${PassOne.value}${PassTwo.value}${PassThree.value}${PassFour.value}`;
  if (codeNum === "1234") {
    OtpValide.value = true;
  }
  if (OtpValide.value) {
    btn.value = "Back To Login";
  }
};

function nextTo(index) {
  const input = index.target;
  if (input.value) {
    const itemNext = input.nextElementSibling;
    if (itemNext) itemNext.focus();
  }
}

function Prev(index) {
  const inputPrev = index.target;
  if (!inputPrev.value) {
    const beforeVal = inputPrev.previousElementSibling;
    if (beforeVal) beforeVal.focus();
  }
}
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
.input-width {
  width: 50px;
  height: 50px;
}
.form-gap {
  gap: 50px;
}
@media (max-width: 576px) {
  .form-gap {
    gap: 20px;
  }
}
</style>
