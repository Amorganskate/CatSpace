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
      <a class="login__sign-up" href="#"> sign up</a>
    </div>
  </div>
</template>

<script setup>
import GoTrue from "gotrue-js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();

let auth = new GoTrue({
  APIUrl: "https://gentle-beignet-96c25c.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

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
</script>
<style scoped>
@import url("/login.css");
</style>
