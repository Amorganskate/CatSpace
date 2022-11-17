<script setup>
import Nav from "./components/navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <header></header>
    <main class="flex justify-center">
      <Nav></Nav>
      <RouterView />
    </main>
  </div>
</template>
