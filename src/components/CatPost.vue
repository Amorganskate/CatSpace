<template>
  <div
    class="max-w-screen-md border-4 border-black rounded-2xl shadow-[0.5rem_0.5rem_red] shadow-black"
  >
    <div class="p-6">
      <div class="flex justify-between content-center">
        <div class="flex">
          <img class="w-9 h-9 rounded-full mr-1.5" :src="avatar" />
          <span class="username-text">{{ username }}</span>
        </div>
        <img src="/icons/icon-more-horizontal.svg" />
      </div>
      <div class="flex justify-center">
        <div
          class="mt-[20px] border-[3px] rounded-md border-black inline-block bg-black"
        >
          <img class="rounded-md object-cover" :src="image" />
        </div>
      </div>
      <div class="flex justify-between items-center mt-[30px]">
        <div class="flex">
          <img class="mr-[20px] w-[30px]" src="/icons/icon-heart.svg" />
          <img class="mr-[20px] w-[30px]" src="/icons/icon-comment.svg" />
          <img class="mr-[20px] w-[30px]" src="/icons/icon-send.svg" />
        </div>
        <img class="w-[30px]" src="/icons/icon-bookmark.svg" />
      </div>
      <div class="mt-3.5 font-supreme">
        <span>Liked by <b>ryan._.royal</b> and <b>others</b></span>
      </div>
      <div class="mt-2">
        <span class="font-chubbo text-[21px] leading-[1.875rem] mr-1">
          {{ username }}
        </span>
        {{ caption }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  username: String,
  caption: String,
  avatar: String,
  image: String,
});
</script>

<style></style>
