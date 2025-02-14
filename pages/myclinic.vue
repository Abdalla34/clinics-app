<template>
  <div class="clinic-page background-second">
    <div :class="{ 'over-lay': openBox }"></div>
    <div class="header p-2 d-flex justify-content-between">
      <img src="/logo3.jpg" alt="Clinic Logo" />
      <div class="icons-setting d-flex gap-3 align-items-center">
        <div
          @click="toogleShowBox"
          class="text-capitalize font-size d-flex align-items-center gap-2 opacity"
          style="cursor: pointer"
        >
          <i class="fa-solid fa-gear second-color-text font-size icon-fa"></i>
          <span class="phne-none">setting</span>
        </div>
        <div
          @click.prevent="navigateTo('/')"
          class="text-capitalize font-size d-flex align-items-center gap-2 opacity"
          style="cursor: pointer"
        >
          <i
            class="fa-solid fa-arrow-right-to-bracket text-danger font-size icon-fa"
          ></i>
          <span class="phne-none">logOut</span>
        </div>
      </div>
      <div :class="{ 'right-0': openBox }" class="box-setting p-3">
        <h1 class="title fw-bold text-capitalize">settings</h1>
      </div>
    </div>
    <div class="position-absolute fix-position box-clinics p-2">
      <div class="add-new d-flex justify-content-between align-items-center">
        <h3 class="text-capitalize h3 title fw-bold position-relative">
          your clinics
        </h3>
        <button
          @click.prevent="navigateTo('stepOne')"
          class="button-add text-capitalize"
        >
          <span>+</span> add new clinic
        </button>
      </div>
      <hr />
      <div class="clinics-detalis">
        <div
          v-for="(clinic, index) in clinicsAll"
          :key="index"
          class="clinics p-3 mb-3 opacity"
          style="cursor: pointer"
        >
          <h5 class="font-size text-capitalize mb-1">
            {{ clinic.nameClinic }}
          </h5>
          <div class="d-flex justify-content-between align-items-center gap-3">
            <p class="font-12px second-color-text">
              {{ clinic.descriptionClinic }}
            </p>
            <i
              class="fa-solid fa-chevron-right second-color-text"
              style="cursor: pointer"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const clinicsAll = ref([""]);
onMounted(() => {
  clinicsAll.value = JSON.parse(localStorage.getItem("detailsClinic"));
});
const openBox = ref(false);
function toogleShowBox() {
  openBox.value = !openBox.value;
}
</script>
<style scoped>
.clinic-page {
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.over-lay {
  position: absolute;
  top: 60px;
  width: 100%;
  height: calc(100% - 60px);
  background-color: rgba(0, 0, 0, 0.3);
  transition: all ease-in-out 0.4s;
  z-index: 9;
}
.box-setting {
  background-color: white;
  position: absolute;
  top: 60px;
  width: 250px;
  right: -300px;
  height: calc(100% - 60px);
  z-index: 10;
  transition: all ease-in-out 0.4s;
}
.right-0 {
  right: 0;
}
.header {
  background-color: white;
  width: 100%;
  height: 60px;
}
.header img {
  width: 80px;
  height: auto;
}
.box-clinics {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.add-new .h3 {
  top: 10px;
}
.button-add {
  border: 1px solid var(--main--color);
  background-color: transparent;
  padding: 5px 15px;
  color: var(--main--color);
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}
.button-add:hover {
  background-color: var(--main--color);
  color: white;
}
.clinics {
  border: 1px solid var(--second-color);
  border-radius: 10px;
}
@media (max-width: 576px) {
  .header img {
    width: 60px;
  }
  .phne-none {
    display: none;
  }
  .icon-fa {
    font-size: 18px;
  }
}
</style>
