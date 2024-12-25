<template>
  <div class="parent-index overflow-hidden">
    <div class="row g-0">
      <div class="col-lg-6 col-md-6 col-sm-6 display-logo">
        <div class="background position-relative padding-logo">
          <div class="details-img position-absolute">
            <img
              class="img-logo"
              src="@/public/logo2.png"
              alt=""
            />
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
            <img-Eyadaty />
            <TitleForms />
            <FormLog />
          </div>
          <div>
            <div class="text-foot text-center">
              <div class="reserved">
                <p class="font-size parg">© 2024 Eadaty . Alrights reserved.</p>
              </div>
              <p class="font-size parg">Terms & Conditions Privacy Policy</p>
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
.padding-logo {
  padding: 10px;
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
.reserved {
  color: var(--secound-color);
}
@media (max-width: 576px) {
  .display-logo {
    display: none;
  }
  .h-100vh {
    height: 100vh;
  }
}
</style>
