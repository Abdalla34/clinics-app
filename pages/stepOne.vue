<template>
  <div class="step-one">
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
              <ButtonsClick @confirm="submit" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-12 position-relative background-second height-100vh p-3"
      >
        <div class="mini-box h-100 p-3">
          <div class="desctop-show">
            <h5 class="text-capitalize">clinic name</h5>
            <p class="second-color-text text-capitalize">description</p>
          </div>
          <div class="desctop-show">
            <h5 class="text-capitalize font-size mt-5">
              Type the name and description of your clinic
            </h5>
          </div>
          <div class="phone-block">
            <TitleSteps />
          </div>
          <form class="mt-4">
            <div>
              <label for="" class="label">clinic name</label>
              <input
                type="text"
                class="input mt-2"
                placeholder="Input your clinic name here"
                v-model="nameClinic"
                :class="{ 'is-valide': nameError }"
              />
              <p
                v-if="nameError"
                class="text-danger font-12px text-capitalize mt-1"
              >
                this is required
              </p>
            </div>
            <div class="mt-4">
              <label for="" class="label">description</label>
              <input
                type="text"
                class="input mt-2"
                placeholder="Input a brief description of your clinic here."
                v-model="description"
                :class="{ 'is-valide': descError }"
              />
              <p
                v-if="descError"
                class="text-danger font-12px text-capitalize mt-1"
              >
                this is required
              </p>
            </div>
            <div
              class="mt-3 d-flex align-items-center justify-content-start gap-2"
            >
              <i class="fa-solid fa-circle-info second-color-text"></i>
              <p class="second-color-text font-12px word-space">
                This information will appear on the main interface to choose the
                clinic you will manage.
              </p>
            </div>
            <div class="phone-block">
              <ButtonsClick @confirm="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const nameClinic = ref("");
const description = ref("");
const nameError = ref(false);
const descError = ref(false);
const submit = () => {
  if (nameClinic.value && description.value.length >= 4) {
    const allNameClinics =
      JSON.parse(localStorage.getItem("detailsClinic")) || [];
    const objectClinic = {
      nameClinic: nameClinic.value,
      descriptionClinic: description.value,
    };
    allNameClinics.push(objectClinic);
    localStorage.setItem("detailsClinic", JSON.stringify(allNameClinics));
    nameError.value = false;
    descError.value = false;
    resetForm();
    navigateTo("stepTow");
  } else {
    nameError.value = true;
    descError.value = true;
  }
};
const resetForm = () => {
  nameClinic.value = "";
  description.value = "";
};
watch([nameClinic, description], (valname, valdesc) => {
  if (valname !== "" && valdesc !== "") {
    nameError.value = false;
    descError.value = false;
  }
});
</script>
