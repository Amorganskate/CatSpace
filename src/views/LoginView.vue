<template>
  <div class="login">
    <div class="login__forms">
      <div class="login__form">
        <label class="login__label" for="username"> username </label>
        <input
          class="login__input"
          id="username"
          type="text"
          v-model="username"
          placeholder="Email"
        />
      </div>
      <div class="login__form">
        <label class="login__label" for="password"> password </label>
        <input
          class="login__input"
          id="password"
          type="password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button @click="login" class="login__button">log in</button>
      <a class="login__forgot" href="#"> forgot password? </a>
      <a class="login__sign-up" @click="signUp()"> sign up</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import auth from "../auth/auth";

const username = ref("");
const password = ref("");
const router = useRouter();

function login() {
  auth
    .login(username.value, password.value, true)
    .then(() => {
      router.push("/");
    })
    .catch((error) => showMessage(`Failed :( ${JSON.stringify(error)}`));
}

function showMessage(text) {
  alert(text);
}

function signUp() {
  router.push("/signup");
}
</script>
<style scoped>
@import url("/login.css");
</style>
