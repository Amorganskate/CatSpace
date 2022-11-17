<script setup>
import Nav from "./components/navigation.vue";
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

let route = useRoute();

var isLoginPage = computed(() => {
  return route.name == "Login";
});
</script>

<template>
  <div>
    <header></header>
    <main class="flex justify-center">
      <Nav v-if="!isLoginPage"></Nav>
      <RouterView />
    </main>
  </div>
</template>