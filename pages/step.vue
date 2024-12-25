<template>
  <div class="Parent">
    <div class="logo-main">
      <img src="public/logo3.jpg" alt="" />
    </div>
    <div class="row g-0">
      <div class="col-lg-6 col-md-6 display">
        <div class="row g-0 justify-content-center align-items-center height">
          <div class="col-9">
            <StepsPage :isActive="activeStep" />
            <InformationStep />
            <div v-if="!stepOne">
              <ButtonConfirm
                :isBtn="isBtnActive"
                @confirm="submit"
                @cancel="CanselFun"
              />
            </div>
            <div v-if="stepOne">
              <ButtonConfirm
                :isBtn="isBtnActive"
                @confirm="ToClinic"
                @cancel="CanselFun"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 color-box p-3 height">
        <div class="mini-box p-2">
          <div class="Step-one" v-if="!stepOne">
            <div class="steps-compnent">
              <StepsPage :isActive="activeStep" />
            </div>
            <div class="display-mini mb-4">
              <InformationStep />
            </div>
            <div class="box-border">
              <h5 class="text-capitalize">{{ clinicName }}</h5>
              <h6 class="text-capitalize secound-color font-size pt-2">
                {{ clinicDescription }}
              </h6>
            </div>
            <h1 class="title mb-5">
              Type the name and description of your clinic
            </h1>
            <form @submit.prevent="submit">
              <div class="mb-4">
                <label class="label" for="">clnic Name</label>
                <input
                  type="text"
                  placeholder="Input your clinic name here"
                  class="input"
                  v-model="clinicName"
                />
                <p
                  class="text-danger text-capitalize font-size"
                  v-if="clinicName && clinicName.length < 3"
                >
                  name Must longer 3 chracter
                </p>
              </div>
              <div>
                <label class="label" for="">clnic description</label>
                <input
                  type="text"
                  placeholder="Input your clinic name here"
                  class="input"
                  v-model="clinicDescription"
                />
                <p
                  class="text-danger text-capitalize font-size"
                  v-if="clinicDescription && clinicDescription.length < 3"
                >
                  Description Must longer 3 chracter
                </p>
              </div>
              <div class="steps-compnent">
                <ButtonConfirm
                  :isBtn="isBtnActive"
                  @confirm="submit"
                  @cancel="CanselFun"
                />
              </div>
            </form>
          </div>
          <div class="tsh" v-if="stepOne">
            <div class="steps-compnent">
              <StepsPage :isActive="activeStep" />
            </div>
            <div class="display-mini mb-4">
              <InformationStep />
            </div>
            <div class="box-border">
              <h5 class="text-capitalize">{{ clinicName }}</h5>
              <h6 class="text-capitalize secound-color font-size pt-2">
                {{ clinicDescription }}
              </h6>
            </div>
            <StyleClinic />
            <div class="steps-compnent">
              <ButtonConfirm
                :isBtn="isBtnActive"
                @confirm="ToClinic"
                @cancel="CanselFun"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const cansel = useState("cansel", () => "cansel");
const confrim = useState("confrim", () => "continue");
const stepOne = ref(false);
const clinicName = ref("");
const clinicDescription = ref("");
const activeStep = ref(false);
const isBtnActive = computed(
  () => clinicName.value.length >= 3 && clinicDescription.value.length >= 3
);
function submit() {
  if (clinicName.value.length >= 3 && clinicDescription.value.length >= 3) {
    stepOne.value = true;
    activeStep.value = true;
    cansel.value = "go back";
    confrim.value = "done";
    const storage = JSON.parse(localStorage.getItem("clinicNew")) || [];
    const clinicInstorage = {
      name: clinicName.value,
      description: clinicDescription.value,
    };
    storage.unshift(clinicInstorage);
    localStorage.setItem("clinicNew", JSON.stringify(storage));
  }
}
function CanselFun() {
  if (stepOne.value) {
    stepOne.value = false;
    activeStep.value = false;
    cansel.value = "cansel";
    confrim.value = "continue";
    const storage = JSON.parse(localStorage.getItem("clinicNew")) || [];
    if (storage.length > 0) {
      storage.shift();
      localStorage.setItem("clinicNew", JSON.stringify(storage));
    }
  }
}
function ToClinic() {
  navigateTo("/YourClinic");
}
</script>
<style scoped>
.logo-main {
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
}
.logo-main img {
  width: 100px;
}
.height {
  height: calc(100vh - 60px);
}
.color-box {
  background-color: rgba(241, 242, 244, 1);
}
/* start mini box */
.mini-box {
  background-color: white;
  height: 100%;
  border-radius: 10px;
}
.box-border {
  border-bottom: 1px solid var(--secound-color);
  margin-bottom: 20px;
  padding-bottom: 20px;
}
@media (max-width: 576px) {
  .display-mini {
    display: none;
  }
  .color-box {
    background-color: white;
  }
}
@media (max-width: 768px) {
  .display {
    display: none;
  }
  .box-border {
    display: none;
  }
}
@media (min-width: 768px) {
  .display-mini {
    display: none;
  }
  .steps-compnent {
    display: none;
  }
}
/* end mini box */
</style>
