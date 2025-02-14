<template>
  <div class="step-three">
    <div class="height-img">
      <img src="public/logo3.jpg" alt="" class="img-logo" />
    </div>
    <div class="row g-0">
      <div class="col-lg-6 col-md-6">
        <div class="row h-100 g-0 justify-content-center align-items-center">
          <div class="col-9">
            <div class="desctop-show title-show">
              <TitleSteps />
            </div>
            <div class="desctop-show buttons-cancel-confirm">
              <ButtonsClick />
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-12 position-relative background-second height-100vh p-3"
      >
        <div class="mini-box h-100 p-3">
          <div class="desctop-show">
            <h5 class="text-capitalize font-size mt-5"></h5>
          </div>
          <div class="phone-block">
            <TitleSteps />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="text-capitalize font-size">Working Day</th>
                <th class="text-capitalize font-size">Start Time</th>
                <th class="text-capitalize font-size">Time out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div class="phone-block pb-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const tableTime = ref([
  {
    day: "sunday",
    timeStart: "",
    hoursStart: "",
    muinteStart: "",
    hoursEnd: "",
    muniteEnd: "",
  },
  {
    day: "monday ",
    timeStart: "",
    hoursStart: "",
    muinteStart: "",
    hoursEnd: "",
    muniteEnd: "",
  },
  {
    day: "tuesday",
    timeStart: "",
    hoursStart: "",
    muinteStart: "",
    hoursEnd: "",
    muniteEnd: "",
  },
]);
</script>
<style scoped>
.table {
  width: 100%;
}
</style>
