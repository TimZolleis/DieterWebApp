import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Intern from "@/views/Intern";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/intern",
    name: "Intern",
    component: Intern,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
export default router;
