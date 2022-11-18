<script setup>
import Nav from "./components/navigation.vue";
import NavDrawer from "./components/NavDrawer.vue";
import { computed, ref, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";
import cat_feed from "@/dummy_data/cat_feed.json";

let route = useRoute();

var isLoginPage = computed(() => {
  console.log(route.name == "Signup" && route.name == "Login");
  return route.name == "Login";
});

const navDrawerOpen = ref(false);
var isSignup = computed(() => {
  return route.name == "Signup";
});

function save_to_local_json(items) {
  var items_json = JSON.stringify(items);

  localStorage.setItem("cat_feed", items_json);
}

onMounted(() => {
  save_to_local_json(cat_feed);
});
</script>

<template>
  <div>
    <main class="flex justify-center">
      <Nav
        @navClicked="() => (navDrawerOpen = true)"
        v-if="!isLoginPage && !isSignup"
      ></Nav>
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
