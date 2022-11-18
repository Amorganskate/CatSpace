<template>
  <div
    class="mt-6 bg-yellow border-[3px] border-black rounded-xl shadow-[0.5rem_0.5rem_red] shadow-black flex items-center"
  >
    <img
      class="border-2 border-black rounded-[10px] m-2 mr-3 p-1"
      :src="`/icons/${icon}.svg`"
    />
    <span class="font-chubbo text-[1.75rem] leading-[2.5rem]">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  icon: String,
});
</script>
