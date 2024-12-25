<template>
  <div>
    <h1 class="title-msg text-center font-family">{{ title }}</h1>
  </div>
</template>
<script setup>
const title = useState("title", () => "");
</script>
<style scoped>
.title-msg {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 10px;
}
@media (max-width: 576px) {
  .title-msg {
    margin-bottom: 0px;
    margin-top: 0px;
  }
}
@media (max-width: 992px) {
  .title-msg {
    font-size: 20px;
  }
}
</style>
