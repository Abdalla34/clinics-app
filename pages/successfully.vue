<template>
  <div class="successfully position-absolute fix-position">
    <div class="row align-items-center justify-content-center">
      <div class="col-9 text-center">
        <img src="public/Illustration.png" alt="" />
        <h1 class="title">Your successfully changed your password</h1>
        <p class="font-12px second-color-text mt-3">
          Always remember the password for your account at Eadaty !
        </p>
        <BtnLogin class="background-main" @click.prevent="navigateTo('/')" />
      </div>
    </div>
    <!-- <div class="footer font-12px text-center mt-5 pt-5">
      <p class="second-color-text">© 2024 Eadaty . Alrights reserved.</p>
      <div>
        <p>Terms & Conditions Privacy Policy</p>
      </div>
    </div> -->
  </div>
</template>
<script setup>
const btnLogin = useState("btnlog", () => "login");
btnLogin.value = "back to login";
</script>
<style scoped>
img {
  width: 150px;
}
</style>
