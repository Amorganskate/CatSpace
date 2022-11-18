<template>
  <div v-if="items.length" class="bg-light-blue">
    <CatPost
      v-for="(item, index) in items"
      class="bg-white"
      :class="{ 'mb-5': index + 1 !== items.length }"
      :key="item.userName + item.imagePath"
      :username="item.userName"
      :avatar="item.userProfileImagePath"
      :image="item.imagePath"
      :caption="item.caption"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CatPost from "./CatPost.vue";
import { read_from_local_json } from "@/utils";
const items = ref([]);

onMounted(() => {
  items.value = read_from_local_json();
});
</script>

<style></style>
