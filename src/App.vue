<script setup>
import Nav from "./components/navigation.vue";
import NavDrawer from "./components/NavDrawer.vue";
import { RouterView, useRoute } from "vue-router";
import { computed, ref } from "vue";

let route = useRoute();

var isLoginPage = computed(() => {
  return route.name == "Login";
});

const navDrawerOpen = ref(false);
</script>

<template>
  <div>
    <header></header>
    <main class="flex justify-center">
      <Nav @navClicked="() => (navDrawerOpen = true)" v-if="!isLoginPage"></Nav>
      <div>
        <div
          v-if="navDrawerOpen"
          class="overlay"
          @click="() => (navDrawerOpen = false)"
        ></div>
        <RouterView :class="{ 'mt-[92px] mb-[120px]': !isLoginPage }" />
        <NavDrawer
          @navItemClicked="() => (navDrawerOpen = false)"
          v-if="navDrawerOpen"
        />
      </div>
    </main>
  </div>
</template>

<style>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 400;
}
</style>
