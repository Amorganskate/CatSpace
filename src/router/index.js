import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import LoginView from "../views/LoginView.vue";
import AuthView from "../views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/forms",
      name: "Form",
      component: FormView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/auth",
      name: "Auth",
      component: AuthView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  var isAuth = localStorage.getItem("gotrue.user") != null;

  if (to.matched.some((route) => route.meta.requiresAuth) && !isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
