<template>
  <div class="login">
    <div class="login__forms">
      <div class="login__form">
        <label class="login__label" for="username"> pick a username </label>
        <input
          class="login__input"
          id="username"
          type="text"
          placeholder="Email"
          v-model="username"
        />
      </div>
      <div class="login__form">
        <label class="login__label" for="password"> create a password </label>
        <input
          class="login__input"
          id="password"
          type="password"
          placeholder="password"
          v-model="password"
        />
      </div>
      <div class="login__form">
        <label class="login__label" for="password">confirm password </label>
        <input
          class="login__input"
          id="password"
          type="password"
          placeholder="Confirm password"
          v-model="confirm_pass"
        />
      </div>
      <button @click="signup()" class="login__button">sign up</button>
      <a class="login__forgot" @click="go_to_login"> log in </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import auth from "../auth/auth";

const username = ref("");
const password = ref("");
const confirm_pass = ref("");
const router = useRouter();

function go_to_login() {
  router.push("/login");
}

function save_to_local_json(items) {
  var items_json = JSON.stringify(items);

  localStorage.setItem("gotrue.user", items_json);
}
function signup() {
  auth
    .signup(username.value, password.value)
    .then((response) => {
      if (response) {
        save_to_local_json(response);
        router.push("/");
      }
    })
    .catch((error) => alert(error, "Shit didn't work"));
}
</script>
<style scoped>
@import url("/login.css");
</style>
