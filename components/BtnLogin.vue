<template>
  <button class="input input-outline font-size mt-3 text-capitalize" @click="$emit('confirm')">
    {{ btnLogin }}
  </button>
</template>
<script setup>
const btnLogin = useState("btnlog", () => "login");
</script>
<style scoped>
.input-outline {
  outline: none;
  border: none;
  color: rgba(160, 174, 192, 1);
}
.input-outline:focus {
  outline: none;
  border: none;
}
</style>
