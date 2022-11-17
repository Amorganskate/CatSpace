<template>
  <main class="mx-6 max-w-screen-md">
    <div class="flex items-center">
      <div class="flex-1">
        <img
          class="border-[3px] border-black w-[84px] h-[84px] rounded-full mr-1.5"
          :src="avatar ? avatar : 'https://via.placeholder.com/200x200'"
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
    <p class="leading-5">the cat's meow...</p>
    <button
      class="rounded-2xl bg-black/[0.1] block w-full text-center py-2 mt-4"
    >
      <span class="username-text text-black">edit profile</span>
    </button>
    <div class="mt-4 grid grid-cols-3 gap-4">
      <div
        v-for="(image, index) in images"
        :key="image + index"
        class="bg-black border-[3px] border-black rounded-xl shadow-[0.5rem_0.5rem] shadow-black flex items-center aspect-square"
      >
        <img :src="image" class="rounded-xl object-cover h-full" />
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { read_from_local_json } from "@/utils";
// const images = ref([
//   "https://via.placeholder.com/200x200/white",
//   "https://via.placeholder.com/200x200/green",
//   "https://via.placeholder.com/200x200/red",
//   "https://via.placeholder.com/200x200/blue",
//   "https://via.placeholder.com/200x200/yellow",
//   "https://via.placeholder.com/200x200/black",
//   "https://via.placeholder.com/200x200/red",
// ]);
const items = ref([]);

onMounted(() => {
  items.value = read_from_local_json();
});

const avatar = computed(() => {
  if (!items.value?.length) return null;

  const firstUserPost = items.value.find((i) => i.userAccountID === 1);
  if (firstUserPost && firstUserPost.userProfileImagePath)
    return firstUserPost.userProfileImagePath;

  return null;
});

const images = computed(() => {
  if (!items.value?.length) return [];
  return items.value
    .filter((i) => i.userAccountID === 1)
    .map((i) => i.imagePath);
});
</script>
