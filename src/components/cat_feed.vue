<template>
  <div>
    <CatPost
      :key="item.userName + item.imagePath"
      v-for="item in items"
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
  console.log(items);
});
</script>

<style></style>
