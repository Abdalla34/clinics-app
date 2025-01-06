<template>
  <div class="otp fix-position position-absolute">
    <div class="row align-items-center justify-content-center">
      <div class="col-9">
        <titleForget />
        <p class="font-12px color-main-text text-center">
          {{ emailCode }} Wrong Email?
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const title = useState("title", () => "");
title.value = "OTP Verification";
const parag = useState("parag", () => "");
parag.value = "We have sent a verification code to email address ";
const emailCode = ref();
onMounted(() => {
  emailCode.value = JSON.parse(localStorage.getItem("emailLog"));
});
</script>
