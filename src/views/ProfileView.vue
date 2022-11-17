<template>
  <main class="mx-6 max-w-screen-md">
    <div class="flex items-center">
      <div class="flex-1">
        <img
          class="border-[3px] border-black w-[84px] h-[84px] rounded-full mr-1.5"
          :src="'https://via.placeholder.com/200x200'"
        />
      </div>
      <div class="flex-1 text-center">
        <div class="profile-number">80</div>
        <div class="profile-number-description">posts</div>
      </div>
      <div class="flex-1 text-center">
        <div class="profile-number">72</div>
        <div class="profile-number-description">following</div>
      </div>
      <div class="flex-1 text-center">
        <div class="profile-number">10k</div>
        <div class="profile-number-description">followers</div>
      </div>
    </div>
    <h1 class="profile-username-text mt-1">AlfredSkates</h1>
    <p class="leading-5">biography asd asd wegerfg sdfth d sedw</p>
    <button
      class="rounded-2xl bg-black/[0.1] block w-full text-center py-2 mt-4"
    >
      <span class="username-text text-black">edit profile</span>
    </button>
    <div class="mt-4 grid grid-cols-3 gap-4">
      <img
        v-for="(image, index) in images"
        :key="image + index"
        :src="image"
        class="border-[3px] border-black rounded-xl shadow-[0.5rem_0.5rem] shadow-black"
      />
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
const images = ref([
  "https://via.placeholder.com/200x200/white",
  "https://via.placeholder.com/200x200/green",
  "https://via.placeholder.com/200x200/red",
  "https://via.placeholder.com/200x200/blue",
  "https://via.placeholder.com/200x200/yellow",
  "https://via.placeholder.com/200x200/black",
  "https://via.placeholder.com/200x200/red",
]);
</script>
