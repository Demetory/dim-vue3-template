// Core
import { createRouter, createWebHistory } from "vue-router";
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";
// Components
import ViewHome from "@/views/ViewHome.vue";

// Data
const defaultTitle = import.meta.env.VITE_APP_TITLE;

// Routes
const routes = [
  {
    path: "/",
    name: "ViewHome",
    component: ViewHome,
  },
  {
    path: "/examples",
    name: "ViewExamples",
    component: () => import("@/views/ViewExamples.vue"),
    meta: {
      title: "Code Examples",
    },
  },
  {
    path: "/secret",
    name: "ViewSecret",
    component: () => import("@/views/ViewSecret.vue"),
    meta: {
      title: "Secret Page",
      auth: true,
    },
  },
  {
    path: "/login",
    name: "ViewLogin",
    component: () => import("@/views/ViewLogin.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: () => import("@/views/ViewNotFound.vue"),
    meta: {
      title: "Page not Found",
    },
  },
];

// Create Router
const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation Guards
router.afterEach((to) => {
  document.title = typeof to.meta.title === "string" ? defaultTitle + " | " + to.meta.title : defaultTitle;
});

router.beforeEach((to) => {
  const examplePiniaStore = useExamplePiniaStore();

  if (to.name !== "ViewLogin" && to.meta.auth && !examplePiniaStore.authenticated) {
    return { name: "ViewLogin" };
  }
});

// Export
export default router;
