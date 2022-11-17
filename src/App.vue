<script setup>
import Nav from "./components/navigation.vue";
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

let route = useRoute();

var isLoginPage = computed(() => {
  console.log(route.name == "Signup" && route.name == "Login")
  return route.name == "Login";
});

var isSignup = computed(() => {
  return route.name == "Signup"
})


</script>

<template>
  <div>
    <header></header>
    <main class="flex justify-center">
      <Nav v-if="!isLoginPage & !isSignup"></Nav>
      <RouterView :class="{ 'mt-[92px] mb-[120px]': !isLoginPage }" />
    </main>
  </div>
</template>
