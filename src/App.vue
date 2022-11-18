<script setup>
import Nav from "./components/navigation.vue";
import { RouterView, useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import cat_feed from "./dummy_data/cat_feed.json";

let route = useRoute();

var isLoginPage = computed(() => {
  console.log(route.name == "Signup" && route.name == "Login");
  return route.name == "Login";
});

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
    <header></header>
    <main class="flex justify-center">
      <Nav v-if="!isLoginPage & !isSignup"></Nav>
      <RouterView :class="{ 'mt-[92px] mb-[120px]': !isLoginPage }" />
    </main>
  </div>
</template>
