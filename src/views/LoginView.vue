<template>
  <div class="login">
    <div class="login__forms">
      <div class="login__form">
        <label class="login__label" for="username"> username </label>
        <input
          class="login__input"
          id="username"
          type="text"
          placeholder="username"
        />
      </div>
      <div class="login__form">
        <label class="login__label" for="password"> password </label>
        <input
          class="login__input"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>
      <button class="login__button">log in</button>
      <a class="login__forgot" href="#"> forgot password? </a>
      <a class="login__sign-up" href="#"> sign up</a>
    </div>
  </div>
</template>
<style scoped>
@import url("/login.css");
</style>
