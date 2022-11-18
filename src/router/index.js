import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import AuthView from "../views/SignupView.vue";
import VisitorView from "../views/VisitorView.vue";

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
      path: "/signup",
      name: "Signup",
      component: AuthView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfileView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/logout",
      name: "Logout",
    },
    {
      path: "/visitor",
      name: "Visitor",
      component: VisitorView,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  var isAuth = localStorage.getItem("gotrue.user") != null;

  if (to.matched.some((route) => route.name == "Logout")) {
    localStorage.removeItem("gotrue.user");
    next("/login");
  }

  if (to.matched.some((route) => route.meta.requiresAuth) && !isAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
