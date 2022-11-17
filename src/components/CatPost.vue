<template>
  <div
    class="w-[375px] min-h-[300px] border-4 border-black rounded-2xl shadow-[0.5rem_0.5rem_red] shadow-black"
  >
    <!-- Content container -->
    <div class="p-6">
      <!-- Avatar / Username row -->
      <div class="flex justify-between">
        <div class="flex">
          <div class="bg-black w-9 h-9 rounded-full mr-1.5"></div>
          <span class="username-text">Username</span>
        </div>
        <div><img src="/icons/icon-more-horizontal.svg" /></div>
      </div>
      <div class="mt-[20px] border-[3px] rounded border-black">
        <img
          class="object-cover"
          src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg"
        />
      </div>
      <div class="flex justify-between items-center mt-[30px]">
        <div class="flex">
          <img class="mr-[20px] w-[30px]" src="/icons/icon-heart.svg" />
          <img class="mr-[20px] w-[30px]" src="/icons/icon-comment.svg" />
          <img class="mr-[20px] w-[30px]" src="/icons/icon-send.svg" />
        </div>
        <img class="w-[30px]" src="/icons/icon-bookmark.svg" />
      </div>
      <div class="font-supreme">
        <span>Liked by <b>ryan._.royal</b> and <b>others</b></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
