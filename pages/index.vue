<template>
  <div class="parent-index overflow-hidden">
    <div class="row g-0">
      <div class="col-lg-6 col-md-6 col-sm-6 display-logo">
        <div class="background position-relative padding-logo p-3">
          <div class="details-img position-absolute">
            <img class="img-logo" src="@/public/logo2.png" alt="" />
            <h2 class="text-light">Amazing Platform!</h2>
            <p class="parag-logo text-light pt-2">
              "عadaty helped me organize patient bookings for my clinic and
              saved me a lot of time and effort."
            </p>
          </div>
          <div
            class="owner d-flex gap-2 align-items-center position-absolute padding-logo"
          >
            <div class="img-owner">
              <img src="@/public/image.png" alt="" />
            </div>
            <div class="title-owner text-capitalize">
              <h1 class="text-light">mohamed salih</h1>
              <p class="text-light">Owner of Al Saleh Dental Clinic</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 position-relative h-100vh">
        <div
          class="row h-100 g-0 justify-content-center align-items-center md-align-items-center"
        >
          <div class="col-9">
            <div class="img-phone-up text-center mb-3">
              <img class="img-phone" src="public/logo3.jpg" alt="" />
            </div>
            <div class="title-login text-center mb-4">
              <h4>Login first to your account</h4>
            </div>
            <FormLogin />
          </div>
          <div class="footer font-12px text-center">
            <p class="second-color-text">© 2024 Eadaty . Alrights reserved.</p>
            <div>
              <p>Terms & Conditions Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const title = useState("title", () => "");
title.value = "Login first to your account";
useHead({
  title: "HomePage",
});
</script>
<style scoped>
.parent-index {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
.background {
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(17, 24, 39, 0) 0%,
      rgba(17, 24, 39, 0.64) 70%,
      #111827 100%
    ),
    url("/public/bg.jpg");
  background-size: cover;
  background-position: center;
}
.details-img {
  bottom: 20%;
}
.img-logo {
  margin-bottom: 20px;
  width: 80px;
}
.owner {
  bottom: 5%;
}
.title-owner h1 {
  font-size: 16px;
}
.title-owner p {
  font-size: 12px;
}
</style>
