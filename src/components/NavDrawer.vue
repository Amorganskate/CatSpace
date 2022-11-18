<template>
  <div class="nav-drawer bg-light-blue rounded-t-2xl">
    <div class="mx-6 md:mx-auto max-w-screen-md">
      <h1 class="font-chubbo text-2xl leading-[2.5rem] text-center mt-4">
        Create
      </h1>

      <NavDrawerItem text="Reel" icon="icon-play" />

      <router-link to="/forms" @click="$emit('navItemClicked')">
        <NavDrawerItem text="Post" icon="icon-grid-view" />
      </router-link>

      <NavDrawerItem text="Story" icon="icon-plus-circle" />

      <NavDrawerItem text="Story Highlight" icon="icon-heart" />

      <NavDrawerItem class="mb-6" text="Live" icon="icon-audio" />
    </div>
  </div>
</template>

<script setup>
import NavDrawerItem from "./NavDrawerItem.vue";
defineProps({
  username: String,
  caption: String,
  avatar: String,
  image: String,
});
defineEmits("navItemClicked");
</script>

<style scoped>
.nav-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  width: 100%;
}
</style>
