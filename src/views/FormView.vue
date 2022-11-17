<template>
  <div class="flex justify-center">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="flex justify-center font-bold mb-4">Create A Post Feed</h1>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="imagePath"
          >
            Image Path
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imagePath"
            type="text"
            placeholder="Image Path"
            v-model="imagePath"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Caption"
          >
            Caption
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="caption"
            type="text"
            placeholder="Caption"
            v-model="caption"
          />
        </div>
        <div class="flex justify-center">
          <button
            type="button"
            style="background-color: #ffc700"
            class="text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            v-on:click="AddToJsonFile()"
          >
            Add To Cat Feed
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import catFeed from "../dummy_data/cat_feed.json";
const username = ref("");
const imagePath = ref("");
const caption = ref("");

function AddToJsonFile() {
  var json = catFeed;

  console.log(json);
}
</script>

<style></style>
