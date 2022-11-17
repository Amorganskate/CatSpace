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
      <a class="login__forgot" href="#"> log in </a>
    </div>
  </div>
</template>

<script setup>
import GoTrue from "gotrue-js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const confirm_pass = ref("");
const router = useRouter();

let auth = new GoTrue({
  APIUrl: "https://gentle-beignet-96c25c.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

function signup() {
  auth
    .signup(username.value, password.value)
    .then(() => {
      alert("A confirmation email has been sent to you.");
    })
    .catch((error) => console.log(error, "Shit didn't work"));
}
</script>
<style scoped>
@import url("/login.css");
</style>
