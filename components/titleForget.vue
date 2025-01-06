<template>
  <div class="title-forget text-center">
    <img class="img" src="public/logo3.jpg" alt="" />
    <h2 class="title text-capitalize mt-2 fw-bold">{{ title }}</h2>
    <p class="text-capitalize font-12px second-color-text parag mt-2">
      {{ parag }}
    </p>
  </div>
</template>
<script setup>
const title = useState("title", () => "");
const parag = useState("parag", () => "");
</script>
<style scoped>
.img {
  width: 100px;
}
@media (max-width: 576px) {
  .img {
    width: 80px;
  }
  .title {
    font-size: 16px;
  }
  .parag {
    font-size: 12px;
  }
}
</style>
