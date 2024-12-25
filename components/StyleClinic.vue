<template>
  <div>
    <h1 class="title mb-3">Choose The Medical Note Standard Style.</h1>
    <div class="up-style d-flex flex-wrap">
      <div
        class="div-style d-flex justify-content-between align-items-center mb-4"
        :class="{ checked: check1 }"
      >
        <div class="text">
          <h6 class="text-capitalize">none</h6>
          <p class="secound-color">A single field for your notes.</p>
        </div>
        <input
          type="checkbox"
          class="inpucheck"
          id="check1"
          v-model="check1"
          @change="handleStepChange('first')"
        />
      </div>
      <div
        class="div-style d-flex justify-content-between align-items-center mb-4"
        :class="{ checked: check2 }"
      >
        <div class="text">
          <h6 class="text-capitalize">none</h6>
          <p class="secound-color">A single field for your notes.</p>
        </div>
        <input
          type="checkbox"
          class="inpucheck"
          id="check2"
          v-model="check2"
          @change="handleStepChange('two')"
        />
      </div>
      <div
        class="div-style d-flex justify-content-between align-items-center mb-4"
        :class="{ checked: check3 }"
      >
        <div class="text">
          <h6 class="text-capitalize">none</h6>
          <p class="secound-color">A single field for your notes.</p>
        </div>
        <input
          type="checkbox"
          class="inpucheck"
          id="check3"
          v-model="check3"
          @change="handleStepChange('three')"
        />
      </div>
      <div
        class="div-style d-flex justify-content-between align-items-center mb-4"
        :class="{ checked: check4 }"
      >
        <div class="text">
          <h6 class="text-capitalize">none</h6>
          <p class="secound-color">A single field for your notes.</p>
        </div>
        <input
          type="checkbox"
          class="inpucheck"
          id="check4"
          v-model="check4"
          @change="handleStepChange('four')"
        />
      </div>
    </div>
    <!-- <ButtonConfirm @confirm="testclick" /> -->
  </div>
</template>

<script setup>
const clinicEnter = localStorage.getItem("nameLclinic");
const desEnter = localStorage.getItem("desLclinic");
const check1 = ref(false);
const check2 = ref(false);
const check3 = ref(false);
const check4 = ref(false);
function handleStepChange(checbox) {
  if (checbox === "first") {
    check2.value = false;
    check3.value = false;
    check4.value = false;
  } else if (checbox === "two") {
    check1.value = false;
    check3.value = false;
    check4.value = false;
  } else if (checbox === "three") {
    check1.value = false;
    check2.value = false;
    check4.value = false;
  } else if (checbox === "four") {
    check2.value = false;
    check3.value = false;
    check1.value = false;
  }
}
</script>

<style scoped>
.div-style {
  width: 100%;
  border: 1px solid var(--secound-color);
  padding: 8px;
  border-radius: 8px;
}

.div-style.checked {
  border: 1px solid var(--main--color);
}

.inpucheck {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--secound-color);
  appearance: none;
}

.inpucheck:checked {
  background-color: var(--main--color);
}
@media (min-width: 576px) and (max-width: 768px) {
  .div-style {
    width: 45%;
    margin-left: 20px;
  }
}
</style>
