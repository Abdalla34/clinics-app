<template>
  <div class="your-clinic">
    <div class="over-lay" v-if="isBox" @click="isBoxDone"></div>
    <div
      class="parent d-flex p-3 justify-content-between p-1 align-items-center"
    >
      <div class="logo-clinic">
        <img class="logo-clinic" src="public/eadaty main logo 3.jpg" alt="" />
      </div>
      <div class="icons-setting cursor d-flex align-items-center gap-3">
        <div
          @click.prevent="isBoxDone"
          class="setting d-flex align-items-center gap-2"
        >
          <i class="fa-solid fa-gear secound-color"></i>
          <span class="handle-span fw-bold">setting</span>
        </div>
        <div class="setting d-flex align-items-center gap-2">
          <i class="fa-solid fa-arrow-right-from-bracket text-danger"></i>
          <span class="handle-span fw-bold">sign out</span>
        </div>
      </div>
    </div>
    <div
      class="box-setting p-2"
      :class="{
        'right-0': isBox,
        'bottom-0': isSmallScreen,
      }"
    >
      <div
        @click.prevent="isBoxDone"
        class="icon-close cursor position-absolute d-flex justify-content-center align-items-center"
      >
        <i class="fa-solid fa-chevron-right color-main"></i>
      </div>
      <h4 class="text-capitalize fw-bold">settings</h4>
      <div class="color-style mt-3">
        <h6 class="text-capitalize fw-bold">color style</h6>
        <div class="style d-flex gap-2 p-2 mt-2">
          <div
            class="ligth style-light-dark d-flex justify-content-center align-items-center gap-2"
          >
            <i class="fa-solid fa-sun"></i>
            <span class="text-capitalize font-size">ligth</span>
          </div>
          <div
            class="dark style-light-dark d-flex justify-content-center align-items-center gap-2"
          >
            <i class="fa-solid fa-moon"></i>
            <span class="text-capitalize font-size">dark</span>
          </div>
        </div>
      </div>
      <div class="selected-language mt-4">
        <h6 class="text-capitalize fw-bold">selected language</h6>
        <select class="select mt-2 text-capitalize font-size" name="" id="">
          <option class="text-capitalize" value="">english</option>
          <option class="text-capitalize" value="">العربيه</option>
          <option class="text-capitalize" value="">french</option>
        </select>
      </div>
    </div>
    <div class="my-clinic p-3">
      <div
        class="text-btn d-flex align-items-center justify-content-between border-bottom pb-3"
      >
        <span class="title text-capitalize fw-bold font-name">your clinic</span>
        <button
          @click.prevent="navigateTo('/step')"
          class="btn-add color-main ps-3 pe-3 pt-1 pb-1 align-items-center display-test opacity"
        >
          <i class="fa-solid fa-plus pe-3"></i> Add new clinic
        </button>
      </div>
      <div
        v-for="(clinic, index) in allClinics"
        :key="index"
        class="clinic-name mt-4 p-3"
      >
        <div class="details position-relative">
          <h5 class="text-capitalize fw-bold title font-name">
            {{ clinic.name }}
          </h5>
          <div class="d-flex justify-content-between">
            <p class="secound-color font-size">{{ clinic.description }}</p>
            <i
              style="cursor: pointer"
              class="fa-solid fa-chevron-right color-main"
              @click="navigateTo('/timework')"
            ></i>
          </div>
          <div
            style="cursor: pointer"
            @click.prevent="remove(index)"
            class="position-absolute deleted text-capitalize"
          >
            delete
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const allClinics = ref([]);
const getLocal = () => {
  const getItem = localStorage.getItem("clinicNew");
  if (getItem) {
    allClinics.value = JSON.parse(getItem);
  } else {
    allClinics.value = [];
  }
};
onMounted(() => {
  getLocal();
});
const isBox = ref(false);
const isSmallScreen = ref(false);
function isBoxDone() {
  isBox.value = !isBox.value;
  isSmallScreen.value = !isSmallScreen.value;
}
function remove(index) {
  allClinics.value.splice(index, 1);
  localStorage.setItem("clinicNew", JSON.stringify(allClinics.value));
}
</script>
<style scoped>
.your-clinic {
  height: 100vh;
  background-color: rgba(250, 250, 250, 1);
  position: relative;
  overflow: hidden;
  font-family: "Manrope", sans-serif;
}
.parent {
  background-color: white;
}
.cursor {
  cursor: pointer;
}
.box-setting {
  position: absolute;
  right: -350px;
  background-color: white;
  height: 100vh;
  width: 300px;
  z-index: 5;
  top: 0;
  transition: all 0.4s ease-in-out;
}
.right-0 {
  right: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.icon-close {
  top: 50%;
  left: -60px;
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.over-lay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 3;
}
.icons-setting {
  cursor: pointer;
}
.style {
  background-color: rgba(246, 246, 246, 1);
  border-radius: 20px;
}
.style-light-dark {
  background-color: white;
  border-radius: 10px;
  width: 50%;
}
.select {
  width: 100%;
  padding: 8px;
  border-color: var(--secound-color);
  border-radius: 10px;
}
.my-clinic {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: white;
}
.btn-add {
  border: none;
  background-color: transparent;
  border: 1px solid var(--main--color);
  border-radius: 10px;
}
.clinic-name {
  border: 1px solid var(--secound-color);
  border-radius: 10px;
}
.font-name {
  font-size: 20px;
}
.deleted {
  background-color: red;
  color: white;
  font-size: 14px;
  padding: 4px;
  left: 93%;
  top: -32px;
  border-radius: 10px;
}
@media (max-width: 576px) {
  .my-clinic {
    width: 90%;
  }
  .display-test {
    display: none;
  }
  .font-name {
    font-size: 15px;
  }
  .handle-span {
    display: none;
  }
  .box-setting {
    right: auto;
    left: 0;
    bottom: -100vh;
    height: 50vh;
    top: auto;
    width: 100%;
  }
}
</style>
