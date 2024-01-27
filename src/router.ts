import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/pages/index.vue";
import Protected from "../src/pages/protected.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/protected", component: Protected, meta: { requiresAuth: true } },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
