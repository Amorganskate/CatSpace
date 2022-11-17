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
      <button
        @click="triggerNetlifyIdentityAction('login')"
        class="login__button"
      >
        log in
      </button>
      <a class="login__forgot" href="#"> forgot password? </a>
      <a class="login__sign-up" href="#"> sign up</a>
    </div>
  </div>
</template>

<script setup>
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init({
  apiUrl: "https://netlify-identity-demo-vue.netlify.com/.netlify/identity",
  logo: true,
});

function triggerNetlifyIdentityAction(action) {
  if (action == "login" || action == "signup") {
    netlifyIdentity.open(action);
    netlifyIdentity.on(action, (user) => {
      this.currentUser = {
        username: user.user_metadata.full_name,
        email: user.email,
        access_token: user.token.access_token,
        expires_at: user.token.expires_at,
        refresh_token: user.token.refresh_token,
        token_type: user.token.token_type,
      };
      this.updateUser({
        currentUser: this.currentUser,
      });
      netlifyIdentity.close();
    });
  } else if (action == "logout") {
    this.currentUser = null;
    this.updateUser({
      currentUser: this.currentUser,
    });
    netlifyIdentity.logout();
    this.$router.push({ name: "Home" });
  }
}
</script>
<style scoped>
@import url("/login.css");
</style>
