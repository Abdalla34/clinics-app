<template>
  <div class="Buttons mt-5">
    <div class="d-flex gap-2">
      <button class="btn-fixed cancel text-capitalize" @click="$emit('cancel')">
        {{ cancel }}
      </button>
      <button
        class="btn-fixed confirm text-capitalize"
        :class="{ 'btn-active': isBtn }"
        @click="$emit('confirm')"
      >
        {{ confirm }}
      </button>
    </div>
  </div>
</template>

<script setup>
const cancel = useState("cansel", () => "");
const confirm = useState("confrim", () => "");
const props = defineProps({
  isBtn: Boolean,
});
</script>
