<template>
  <div class="step-tow">
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
              <ButtonsClick @confirm="clickButton" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-12 position-relative background-second height-100vh p-3"
      >
        <div class="mini-box h-100 p-3">
          <div class="desctop-show">
            <h5 class="text-capitalize font-size mt-5">
              Choose The Medical Note Standard Style.
            </h5>
          </div>
          <div class="phone-block">
            <TitleSteps />
          </div>
          <!-- <div class="clinics-style mt-4">
            <div
              class="style mb-4"
              v-for="(style, index) in listStyle"
              :key="index"
              :class="{ 'border-check': indexCheck === index }"
            >
              <h6 class="text-capitalize font-size">{{ style.styleNmae }}</h6>
              <div
                class="d-flex align-items-center justify-content-between gap-2"
              >
                <p class="second-color-text font-12px word-sapce">
                  {{ style.listDetails }}
                </p>

                <input
                  type="checkbox"
                  class="check-box"
                  @change="selectedCheckBox(index)"
                  :checked="indexCheck === index"
                />
              </div>
            </div>
          </div> -->
          <div class="clinics-style mt-4">
            <p v-if="errorTest" class="text-capitalize text-danger font-12px">
              this is required
            </p>
            <div
              class="style mb-4"
              v-for="(style, index) in listsClinicStyle"
              :key="index"
              :class="{ 'border-check': indexCheck === index }"
            >
              <h6 class="text-uppercase font-size">{{ style.styleName }}</h6>
              <div
                class="d-flex align-items-center justify-content-between gap-2"
              >
                <p class="second-color-text font-12px word-sapce">
                  {{ style.listDeatails }}
                </p>

                <input
                  type="checkbox"
                  class="check-box"
                  @change="selectedCheckBox(index)"
                  :checked="indexCheck === index"
                />
              </div>
            </div>
          </div>
          <div class="phone-block pb-3">
            <ButtonsClick @confirm="clickButton" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const listsClinicStyle = ref([
  {
    styleName: "None",
    listDeatails: "A single field for your notes.",
  },
  {
    styleName: "soap",
    listDeatails:
      "A widely used format that divides notes into Subjective, Objective.",
  },
  {
    styleName: "soaper",
    listDeatails:
      "An extension of SOAP, adding Education and Response to the original components.",
  },
  {
    styleName: "pHE",
    listDeatails:
      "Focuses on the Problem, Intervention, and Evaluation of a patient's condition.",
  },
  {
    styleName: "dart",
    listDeatails:
      "Highlights the patient's Diagnosis, Action, Response, and Teaching needs.",
  },
]);
const indexCheck = ref(null);
function selectedCheckBox(numIndex) {
  indexCheck.value = numIndex;
  console.log(indexCheck.value);
  localStorage.setItem("style", JSON.stringify(indexCheck.value));
}
const errorTest = ref(false);
function clickButton() {
  if (indexCheck.value !== null) {
    navigateTo("/stepThree"); 
    errorTest.value = false;
  } else {
    errorTest.value = true;
  }
}
onMounted(() => {
  const savedStyle = localStorage.getItem("style");
  if (savedStyle !== null) {
    indexCheck.value = JSON.parse(savedStyle);
  }
});
</script>
<style>
.check-box {
  width: 20px;
  height: 20px;
  appearance: none;
  border-radius: 50%;
  border: 2px solid var(--main--color);
  cursor: pointer;
  flex-shrink: 0;
}
.check-box:checked {
  background-color: var(--main--color);
}
.word-sapce {
  word-spacing: -2;
}
.style {
  border: 1px solid var(--second-color);
  padding: 10px;
  border-radius: 10px;
}
.border-check {
  border: 1px solid var(--main--color);
}
@media (max-width: 576px) {
  .check-box {
    width: 15px;
    height: 15px;
  }
}
</style>
