<template>
  <div>
    <img src="@/public/logo3.jpg" alt="" class="img-show" />
  </div>
</template>
<style scoped>
.img-show {
  display: none;
}
@media (max-width: 576px) {
  .img-show {
    display: block;
    width: 80px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
  }
}
</style>
