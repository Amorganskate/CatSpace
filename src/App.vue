<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="background_color">
    <header></header>
    <main class="flex justify-center">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.background_color {
  background-color: #c6f1ff;
}
</style>
