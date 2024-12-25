<template>
  <button class="btn-log text-capitalize">{{ btn }}</button>
</template>
<script setup>
const btn = useState("Btn", () => "login");
</script>
<style scoped>
.btn-log {
  margin-top: 10px;
  transition: ease-in-out all 0.2s;
  color: var(--secound-color);
  font-weight: 600;
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
}
.btn-log :focus {
  outline: none;
}
@media(max-width: 768px){
  .btn-log{
    margin-top: 15px;
  }
}
</style>
