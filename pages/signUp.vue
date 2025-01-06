<template>
  <div class="sign-up">
    <div class="row g-0 h-0">
      <div class="col-lg-6 col-md-6 col-sm-6 position-relative">
        <div
          class="row h-100 g-0 justify-content-center align-items-center md-align-items-center"
        >
          <div class="col-9">
            <div class="img-phone-up text-center mb-3">
              <img class="img-phone" src="public/logo3.jpg" alt="" />
            </div>
            <div class="title-login text-center mb-4">
              <h4>Manage your patients' bookings easily starting now!</h4>
            </div>
            <FormSignUp />
          </div>
          <div class="footer font-12px text-center">
            <p class="second-color-text">© 2024 Eadaty . Alrights reserved.</p>
            <div>
              <p>Terms & Conditions Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-6 display-logo background-main p-3 position-relative right-box h-100vh"
      >
        <h4 class="title text-light text-center mt-3">
          Let us organize your patient bookings today.
        </h4>
        <p class="text-light font-12px text-center mt-3">
          We help you complete all your appointment scheduling needs with ease.
        </p>
        <div class="mini-box-right d-flex gap-4 mt-4">
          <div class="img p-2">
            <img src="public/logo3.jpg" alt="" />
          </div>
          <div class="name-box p-4">
            <div class="detalis background-second p-3">
              <h5 class="font-size text-capitalize">hi name</h5>
              <!-- <p class="font-12px">Lorem ipsum dolor sit amet consectetur</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.sign-up {
  min-height: 100vh;
}
.h-100vh {
  height: 100vh;
}
.right-box {
  overflow: hidden;
}
.mini-box-right {
  width: 90%;
  background-color: white;
  position: absolute;
  right: -16px;
  height: 100%;
  border-top-left-radius: 10px;
}
.img {
  width: 30%;
  background-color: white;
}
.img img {
  width: 60px;
}
.name-box {
  width: 70%;
}
.detalis{
  width: 100%;
  height: 100%;
}
</style>
