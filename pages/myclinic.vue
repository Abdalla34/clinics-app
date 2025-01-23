<template>
  <div class="clinic-page background-second">
    <!-- الهيدر يبقى في مكانه -->
    <div class="header p-2 d-flex justify-content-between">
      <img src="/logo3.jpg" alt="Clinic Logo" />
      <div class="icons-setting d-flex gap-3 align-items-center">
        <div class="text-capitalize font-size">
          <i class="fa-solid fa-gear second-color-text font-12px"></i> setting
        </div>
        <div class="text-capitalize font-size">
          <i
            class="fa-solid fa-arrow-right-to-bracket text-danger font-12px"
          ></i>
          logout
        </div>
      </div>
    </div>
    <div
      class="row-container position-absolute d-flex align-items-center justify-content-center fix-position"
    >
      <div class="row g-0">
        <div class="col-9">
          <div class="add-new">
            <div class="font-size">under construction</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clinic-page {
  height: 100vh;
  position: relative;
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

.add-new {
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
}
</style>
