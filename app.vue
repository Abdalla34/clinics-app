<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
    },
  ],
});
</script>

<style scoped>
body {
  font-family: "Manrope", sans-serif;
}
</style>
