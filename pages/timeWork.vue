<template>
  <div class="Parent">
    <div class="logo-main">
      <img src="public/logo3.jpg" alt="" />
    </div>
    <div class="background-mini">
      <div class="steps-compnent">
        <LastStep :isActiveTwo="doneACtive" :isActive="ActiveBtn" />
      </div>
      <div class="text-content">
        <h1 class="title">Add New Work Schedule</h1>
        <div class="total-work">
          <h4 class="title">Working Time</h4>
          <p class="text-capitalize secound-color">total workTime</p>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <div class="col-lg-5 col-md-5 display-left-section">
        <div class="row g-0 justify-content-center align-items-center height">
          <div class="col-9">
            <LastStep :isActiveTwo="doneACtive" :isActive="ActiveBtn" />
            <InformationStep />
            <div>
              <ButtonConfirm
                :isBtn="doneACtive"
                @cancel="navigateTo('/yourclinic')"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-12 color-box p-3">
        <div class="mini-box p-2">
          <div class="on-table">
            <div class="steps-compnent">
              <LastStep :isActiveTwo="doneACtive" :isActive="ActiveBtn" />
            </div>
            <div class="text-content">
              <h1 class="title">Add New Work Schedule</h1>
              <div class="total-work">
                <h4 class="title">Working Time</h4>
                <p class="text-capitalize">
                  <span class="color-main">
                    total workTime :h</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="time-work mt-4">
              <table class="w-100">
                <thead>
                  <tr>
                    <td class="text-capitalize fw-bold font-size">
                      working day
                    </td>
                    <td class="text-capitalize fw-bold font-size">
                      start time
                    </td>
                    <td class="text-capitalize fw-bold font-size">time out</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(day, index) in days" :key="index">
                    <td class="text-start">
                      <i
                        :class="{
                          'fa-solid fa-toggle-off': !day.isActive,
                          'fa-solid fa-toggle-on': day.isActive,
                          Active: day.isActive,
                          'secound-color': !day.isActive,
                        }"
                      ></i>
                      <span class="ms-1 text-capitalize fw-bold font-size">{{
                        day.name
                      }}</span>
                    </td>
                    <p
                      class="time-none secound-color font-size fw-bold text-start"
                    >
                      start Time
                    </p>
                    <td class="text-start">
                      <input
                        type="text"
                        class="input-width"
                        @input="udateTime"
                        v-model="day.startHours"
                        placeholder="00"
                      />
                      <input
                        type="text"
                        class="input-width"
                        @input="udateTime"
                        v-model="day.startMunites"
                        placeholder="00"
                      />
                      <select
                        @change="udateTime"
                        v-model="day.startPeriod"
                        name=""
                        id=""
                        class="input-width input-selected font-size"
                      >
                        <option value="Am">Am</option>
                        <option value="Pm">Pm</option>
                      </select>
                    </td>
                    <p
                      class="time-none secound-color font-size fw-bold text-start"
                    >
                      End Time
                    </p>
                    <td class="text-start">
                      <input
                        type="text"
                        class="input-width"
                        @input="udateTime"
                        v-model="day.endHours"
                        placeholder="00"
                      />
                      <input
                        type="text"
                        class="input-width"
                        @input="udateTime"
                        v-model="day.endMunites"
                        placeholder="00"
                      />
                      <select
                        @change="udateTime"
                        v-model="day.endPeriod"
                        name=""
                        id=""
                        class="input-width input-selected font-size"
                      >
                        <option value="Pm">PM</option>
                        <option value="Am">Am</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="steps-compnent buttons">
                <div>
                  <ButtonConfirm
                    :isBtn="doneACtive"
                    @cancel="navigateTo('/yourclinic')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Time-Work",
});
onMounted(() => {
  const getIconFromLocal = localStorage.getItem("day");
  if (getIconFromLocal) {
    const outToUseInnerArray = JSON.parse(getIconFromLocal);
    outToUseInnerArray.forEach((getIconFromLocal, index) => {
      if (days[index]) {
        Object.assign(days[index], getIconFromLocal);
      }
    });
  }
});
const cancel = useState("cansel", () => "Go Back");
const confirm = useState("confrim", () => "Done");
const doneACtive = ref(true);
const ActiveBtn = ref(true);
const totalHours = ref(0);
const days = reactive([
  {
    name: "sun",
    isActive: false,
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
  {
    name: "mon",
    isActive: false,
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
  {
    name: "tues",
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
  {
    name: "wed",
    isActive: false,
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
  {
    name: "thur",
    isActive: false,
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
  {
    name: "Fri",
    isActive: false,
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
  {
    name: "sat",
    isActive: false,
    startHours: "",
    startMunites: "",
    endHours: "",
    endMunites: "",
    startPeriod: "Am",
    endPeriod: "Pm",
  },
]);
function udateTime() {
  localStorage.setItem("day", JSON.stringify(days));
}
watch(days, (newDays) => {
  newDays.forEach((day) => {
    day.isActive = day.startHours !== "" && day.endHours !== "";
    localStorage.setItem("day", JSON.stringify(newDays));
  });
  {
    deep: true;
  }
});
</script>
<style scoped>
thead tr {
  background-color: rgba(241, 242, 244, 1);
  padding: 4px;
}
thead tr td {
  padding: 4px;
}
tbody tr td {
  padding-bottom: 20px;
  padding-top: 10px;
}
.input-width {
  width: 35px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 3px;
}
.input-selected {
  width: 55px;
}
.Active {
  color: var(--main--color);
  transition: all 0.3s ease-in-out;
}
.background-mini {
  background-color: white;
  padding: 20px;
  display: none;
}
.time-none {
  display: none;
}
.on-table {
  display: none;
}
@media (max-width: 480px) {
  tr {
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px;
  }
  tbody tr td {
    display: flex;
    align-items: center;
  }
  thead {
    display: none;
  }
  .color-box {
    background-color: white;
  }
  .mini-box {
    background-color: rgba(241, 242, 244, 1);
  }
  .background-mini {
    display: block;
  }
  .time-none {
    display: block;
  }
}
@media (min-width: 481px) {
  .on-table {
    display: block;
    background-color: white;
    padding: 20px;
  }
}
</style>
