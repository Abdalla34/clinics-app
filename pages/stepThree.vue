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
          <div class="desctop-show mb-4">
            <h5 class="text-capitalize font-size mt-1">
              Add New Work Schedule
            </h5>
          </div>
          <div class="phone-block mb-4">
            <TitleSteps />
          </div>
          <div class="working-time mb-4">
            <h4 class="fw-bold">Working Time</h4>
            <p class="second-color-text font-12px">Total Working Time :</p>
          </div>
          <table class="w-100">
            <thead class="phone-none">
              <tr class="background-second">
                <th class="text-capitalize text-size-head p-1">Working day</th>
                <th class="text-capitalize text-size-head">Start time</th>
                <th class="text-capitalize text-size-head">Time out</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(day, index) in days" :key="index" class="tr-phone">
                <td class="pt-2 mt-2">
                  <i class="fa-solid fa-toggle-off"></i>
                  <span class="ps-2 font-size text-capitalize">
                    {{ day.nameDay }}</span
                  >
                </td>
                <p class="phone-time-title font-size text-capitalize">
                  start Time
                </p>
                <td
                  class="start-time pt-2 d-flex gap-1 align-items-center justify-content-start mt-2 pt-2"
                >
                  <input
                    type="text"
                    placeholder="0"
                    class="input-special"
                    v-model="day.startHours"
                  />
                  <input
                    type="text"
                    placeholder="00"
                    class="input-special"
                    v-model="day.startMinutes"
                  />
                  <select
                    class="input-special input-special-Period me-2 text-option"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </td>
                <p class="phone-time-title font-size text-capitalize">
                  Time out
                </p>
                <td class="time-out pt-3 mt-2">
                  <input
                    type="text"
                    placeholder="0"
                    class="input-special me-1"
                  />
                  <input
                    type="text"
                    placeholder="00"
                    class="input-special me-1"
                  />
                  <select
                    class="input-special input-special-Period text-option"
                  >
                    <option value="PM">PM</option>
                    <option value="AM">AM</option>
                  </select>
                </td>
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
const days = ref([
  {
    nameDay: "sun",
    startHours: "",
    startMinutes: "",
    endMinutes: "",
    startPeriod: "",
    endPeriod: "",
    isActive: false,
  },
  {
    nameDay: "mon",
    startHours: "",
    startMinutes: "",
    endMinutes: "",
    startPeriod: "",
    endPeriod: "",
    isActive: false,
  },
  {
    nameDay: "tues",
    startHours: "",
    startMinutes: "",
    endMinutes: "",
    startPeriod: "",
    endPeriod: "",
    isActive: false,
  },
  {
    nameDay: "wed",
    startHours: "",
    startMinutes: "",
    endMinutes: "",
    startPeriod: "",
    endPeriod: "",
    isActive: false,
  },
  {
    nameDay: "thur",
    startHours: "",
    startMinutes: "",
    endMinutes: "",
    startPeriod: "",
    endPeriod: "",
    isActive: false,
  },
]);
</script>
<style scoped>
.input-special {
  width: 40px;
  height: 30px;
  border: 1px solid var(--second-color);
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  color: black;
}
.input-special:focus {
  outline: none;
  border: 1px solid var(--main--color);
  color: black;
}
.input-special::placeholder {
  font-weight: normal;
  color: black;
  font-size: 12px;
  font-weight: bold;
}
.input-special-Period {
  width: 50px;
}
.text-size-head {
  font-size: 14px;
  font-weight: bold;
}
.phone-time-title {
  display: none;
}
.working-time h4 {
  font-size: 15px;
}
@media (max-width: 500px) {
  .mini-box {
    overflow: auto;
    max-height: 90vh;
  }
  .phone-none {
    display: none;
  }
  .tr-phone {
    background-color: var(--second-color-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    padding-bottom: 20px;
  }
  .phone-time-title {
    display: block;
    margin-top: 10px;
    margin-bottom: -10px;
    color: var(--second-color);
  }
}
@media (max-width: 992px) {
  .input-special {
    width: 30px;
    height: 30px;
  }
  .input-special-Period {
    width: 40px;
  }
  .text-size-head {
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
