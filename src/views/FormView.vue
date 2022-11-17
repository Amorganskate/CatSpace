<template>
  <div class="flex justify-center">
    <form id="app" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="flex justify-center font-bold mb-4">Create A Post Feed</h1>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Select a Username
        </label>
        <select
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="select an Account"
          v-model="selected"
        >
          <option
            :key="option.userId"
            v-for="option in username_list"
            :value="option"
          >
            {{ option.username }}
          </option>
        </select>
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
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Caption">
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
          class="bg-yellow text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          v-on:click="AddToJsonFile()"
        >
          Add To Cat Feed
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import catfeed from "../dummy_data/cat_feed.json";
const imagePath = ref("");
const caption = ref("");
let username_list = ref("");
const selected = ref("");

async function AddToJsonFile() {
  var json = read_from_local_json();
  let isValid = CheckForm();

  if (!isValid) {
    alert("Please Fill Out Fields");
    return;
  }

  var new_record = {
    userAccountID: selected.value.userId,
    profileImage: selected.value.profileImage,
    userName: selected.value.username,
    caption: caption.value,
    imagePath: imagePath.value,
    likes: 0,
    
  };

  json.push(new_record);

  save_to_local_json(json);
}

function save_to_local_json(items) {
  var items_json = JSON.stringify(items);

  localStorage.setItem("cat_feed", items_json);
}

function read_from_local_json() {
  var items_json = localStorage.getItem("cat_feed");
  var items = JSON.parse(items_json);

  if (!items) {
    items = [];
  }

  return items;
}
onMounted(async () => {
  save_to_local_json(catfeed);

  var items = read_from_local_json();
  username_list.value = items.map((x) => ({
    username: x.userName,
    userId: x.userAccountID,
    profileImage: x.profileImage,
  }));
});

function CheckForm() {
  return selected.value != "" && imagePath.value != "" && caption.value != "";
}
</script>
