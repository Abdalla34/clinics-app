<template>
  <div class="parent-about overflow-hidden">
    <div class="test">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 position-relative">
          <div
            class="row d-flex justify-content-center align-items-center flex-column"
          >
            <div class="col-9">
              <img-Eyadaty />
              <TitleForms />
              <FormSign />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 position-relative">
          <div class="overLay"></div>
          <div class="p-3">
            <h1 class="title z-index">
              Let us organize your patient bookings today.
            </h1>
            <p class="paragraph z-index">
              We help you complete all your appointment scheduling needs with
              ease.
            </p>
          </div>
          <div class="mini-box d-flex">
            <div class="logo-box">
              <img
                class="img-box"
                src="@/public/logo3.jpg"
                alt=""
              />
            </div>
            <div class="details">
              <div class="one">
                <h6 class="text-capitalize">hi name</h6>
                <p class="pr text-capitalize">
                  this is a summary patient bookings so far.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const title = useState("title", () => "");
title.value = "Manage your patients' bookings easily starting now!";
useHead({
  title: "AboutPage",
});
</script>
<style scoped>
.parent-about {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.row {
  height: 100vh;
}
.overLay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(39, 163, 118, 70%);
}
.z-index {
  position: relative;
  z-index: 4;
}
.title {
  font-family: "Manrope", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 40px;
}
.paragraph {
  color: rgba(241, 242, 244, 1);
  font-size: 18px;
}
.mini-box {
  background-color: white;
  position: relative;
  z-index: 10;
  width: 90%;
  right: -10%;
  border-top-left-radius: 10px;
  height: 100vh;
}
.logo-box {
  height: 100%;
  width: 40%;
  border-right: 1px solid var(--secound-color);
  padding: 15px;
}
.img-box {
  max-width: 80px;
  max-height: 50px;
}
.details {
  padding: 15px;
  border-top: 1px solid var(--secound-color);
  margin-top: 80px;
}
.pr {
  font-size: 12px;
  color: var(--secound-color);
}
@media (max-width: 768px) {
  .col-9 {
    margin-top: -10%;
  }
}
</style>
