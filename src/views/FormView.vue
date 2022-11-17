<template>
  <div class="w-full max-w-xs">
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
            v-for="option in usernames"
            :value="option.userId">
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
          style="background-color: #ffc700"
          class="text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          v-on:click="AddToJsonFile()"

        >
          Add To Cat Feed
        </button>
      </div>
    </form>
  </div>
</template>

<script setup >
import { ref, onMounted } from "vue";
import catfeed from "../dummy_data/cat_feed.json"
const username = ref('');
const imagePath = ref('');
const caption = ref('');
let username_list = ref('')
const selected = ref('')

const usernames = ref(username_list);

// let catfeed = JSON.parse(`[
//   {
//     "userAccountID": 1,
//     "userName": "KittyLove4Ever",
//     "userProfileImagePath": "",
//     "imageId": 1,
//     "imagePath": "https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg",
//     "caption": "This is my cat Franklin the turtle",
//     "Likes": 0
//   },
//   {
//     "userAccountID": 2,
//     "userName": "KittysRMyPassion",
//     "userProfileImagePath": "",
//     "imageId": 2,
//     "imagePath": "https://a.pinatafarm.com/1092x612/d47afa3656/coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg/m/522x0",
//     "caption": "This is my cat coughing isn't he awesome",
//     "Likes": 0
//   },
//   {
//     "userAccountID": 3,
//     "userName": "OverlyObsessedWithCats",
//     "userProfileImagePath": "",
//     "imageId": 3,
//     "imagePath": "https://i.pinimg.com/564x/5c/a1/42/5ca142d34fd1903773b4f4e6f43d9045.jpg",
//     "caption": "This is my cat in a standing pose",
//     "Likes": 0
//   }
// ]`);

async function  AddToJsonFile() {
  var json = username_list;
  let isValid = CheckForm();



  if (!isValid) {
    alert("Please Fill Out Fields");
    return;
  }

  console.log(json);
}
onMounted(async () => {
  username_list.value = catfeed.map((x) => ({
    username: x.userName,
    userId: x.userAccountID,
    profileImage: x.profileImage,
  }));
});

function CheckForm(){
  return username.value != "" && imagePath.value != "" && caption.value != "";
}
</script>

