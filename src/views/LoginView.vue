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
          type="text"
          placeholder="password"
        />
      </div>
      <button class="login__button">log in</button>
      <a class="login__forgot" href="#"> forgot password? </a>
    </div>
  </div>
</template>
<style scoped>
.login {
  width: 100%;
  background: linear-gradient(0deg, #c6f1ff, #c6f1ff);
  color: black;
}
.login__forms {
  max-width: 768px;
  padding: 178.5px 16px 0 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.login__form {
  display: flex;
  flex-direction: column;
}
.login__label {
  padding: 0 12px;
  margin-bottom: 8px;
  font-family: "Supreme";
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 27px;
}

.login__input {
  width: 100%;
  height: 67px;
  padding: 16px 24px;
  font-family: "Chubbo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  border: 3px solid #000000;
  border-radius: 12px;
  margin-bottom: 16px;
}

.login__button {
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc700;
  border: 3px solid #000000;
  border-radius: 12px;
  font-family: "Chubbo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 16px;
}

.login__forgot {
  widows: 100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Chubbo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
}
</style>
