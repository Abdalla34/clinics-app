<template>
  <div class="step-one">
    <div class="height-60px">
      <img src="public/logo3.jpg" alt="" class="img-logo" />
    </div>
    <div class="row g-0">
      <div class="col-lg-6 col-md-6">
        <div class="row h-100 g-0 justify-content-center align-items-center">
          <div class="col-9">
            <div class="d-none-titele">
              <h1 class="title h-d-small h1">We need some of your Clinic Information</h1>
              <p class="font-12px second-color-text mt-4">
                This data is required so that you can manage your clinics
                efficiently and easily.
              </p>
            </div>
            <div class="none-md">
              <div class="d-flex gap-2 align-items-center mt-5 button-display">
                <button class="button-handle cancel font-size opacity">
                  cancel
                </button>
                <button class="button-handle confirm font-size opacity">
                  confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-6 col-sm-12 position-relative background-second height-100vh p-3"
      >
        <div class="mini-box h-100 p-3">
          <div class="d-md-show">
            <h1 class="title h-d-small">
              We need some of your Clinic Information
            </h1>
            <p class="font-12px second-color-text mt-4">
              This data is required so that you can manage your clinics
              efficiently and easily.
            </p>
          </div>
          <div class="d-none-titele">
            <h5>Clinic name</h5>
            <p class="second-color-text font-size mt-2">description</p>
          </div>
          <h3 class="title h-d-small mt-4">
            Type the name and description of your clinic
          </h3>
          <div class="form mt-5">
            <form action="">
              <div>
                <label for="" class="label mb-1">clinic name</label>
                <input
                  type="text"
                  class="input"
                  placeholder="Input your clinic name here"
                />
              </div>
              <div class="mt-4">
                <label for="" class="label mb-1">description</label>
                <input
                  type="text"
                  class="input"
                  placeholder="Input a brief description of your clinic here."
                />
              </div>
              <div class="mt-3 d-flex align-items-center gap-1">
                <i
                  class="fa-solid fa-circle-info font-12px second-color-text"
                ></i>
                <p class="font-12px second-color-text word-sapce">
                  This information will appear on the main interface to choose
                  the clinic you will manage.
                </p>
              </div>
            </form>
            <div class="d-flex gap-2 align-items-center mt-5">
              <button class="d-md-show button-handle cancel font-size opacity">
                cancel
              </button>
              <button class="d-md-show button-handle confirm font-size opacity">
                confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
.height-60px {
  height: 60px;
  border-bottom: 1px solid var(--second-color);
  width: 50%;
}
.img-logo {
  width: 80px;
  margin-left: 10px;
  margin-top: 10px;
}
.height-100vh {
  height: calc(100vh - 60px);
}
.mini-box {
  background-color: white;
  border-radius: 8px;
}
.word-sapce {
  word-spacing: -1px;
}
.h1 {
  font-size: 30px;
  word-spacing: -1px;
}
.d-md-show {
  display: none;
}
.d-none-titele {
  display: block;
}
.button-handle {
  border: none;
  color: white;
  padding: 5px 20px;
  border-radius: 4px;
}
.cancel {
  background-color: white;
  border: 1px solid var(--main--color);
  color: var(--main--color);
  text-transform: capitalize;
}
.confirm {
  background-color: var(--main--color);
  text-transform: capitalize;
}
@media (max-width: 767px) {
  .none-md {
    display: none;
  }
  .height-60px {
    width: 100%;
  }
  .h-d-small {
    font-size: 18px;
    word-spacing: -1px;
  }
  .d-md-show {
    display: block;
  }
  .d-none-titele {
    display: none;
  }
}
</style>
