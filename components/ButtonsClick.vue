<template>
  <div class="clicks">
    <div class="d-flex gap-2 align-items-center mt-5 button-display">
      <button
        class="button-handle cancel font-size opacity"
        @click.prevent="$emit('cancel')"
      >
        cancel
      </button>
      <button
        class="button-handle confirm font-size opacity"
        @click.prevent="$emit('confirm')"
      >
        confirm
      </button>
    </div>
  </div>
</template>
<script setup>
defineEmits(["confirm", "cancel"]);
</script>
<style scoped>
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
</style>
