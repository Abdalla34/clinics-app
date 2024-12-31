<template>
  <div class="step-page mb-4">
    <div class="d-flex gap-1">
      <div class="step"></div>
      <div class="step two" :class="{ 'btn-active': isActive }"></div>
      <div class="step two" :class="{ 'btn-active': isActiveTwo }"></div>
    </div>
    <p class="text-uppercase secound-color fw-bold pt-2">step of 1</p>
  </div>
</template>
<script setup>
const props = defineProps({
  isActiveTwo: Boolean,
  isActive: Boolean,
});
</script>