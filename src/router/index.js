import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Intern from "@/views/Intern";
import axios from "axios";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      public: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login to Dieter",
      public: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register to Dieter",
      public: true,
    },
  },
  {
    path: "/intern",
    name: "Intern",
    component: Intern,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.public)) {
    next();
  } else if (!localStorage.getItem("token")) {
    next("/login");
  } else if (localStorage.getItem("expirationDate") < Date.now()) {
    next("/login");
  } else {
    axios
      .get("https://api.devicedieter.de/auth", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        next();
      })
      .catch((error) => {
        console.log(error);
        next("/login");
      });
  }
});
export default router;
