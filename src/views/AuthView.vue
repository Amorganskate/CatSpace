<template>
  <div class="login">
    <div class="login__forms">
      <div class="login__form">
        <label class="login__label" for="username"> pick a username </label>
        <input
          class="login__input"
          id="username"
          type="text"
          placeholder="username"
        />
      </div>
      <div class="login__form">
        <label class="login__label" for="password"> create a password </label>
        <input
          class="login__input"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>
      <div class="login__form">
        <label class="login__label" for="password">confirm password </label>
        <input
          class="login__input"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>
      <button class="login__button">sign up</button>
      <a class="login__forgot" href="#"> log in </a>
    </div>
  </div>
</template>
<style scoped>
@import url("/login.css");
</style>
