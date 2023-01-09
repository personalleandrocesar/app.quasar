
const routes = [
  {
    path: "/",
    component: () => import("src/pages/LoginPage.vue"),
  },
  {
    path: "/recuperar",
    children: [{ path: "", component: () => import("pages/RecuperarPage.vue") }],
  },
  // Usuários
  { path: '/user/:username/treino/:treinoId', component: () => import("pages/FeedPage.vue") },

  {
    path: "/user/leandro-cesar",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue")}],
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/user/:usernameId/feed",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/FeedPage.vue") }],
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: "/user/:usernameId/treino",
  //   alias: "/:usernameId/treino",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/FeedPage.vue") }],
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: "/user/:username/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "Home", component: () => import("pages/IndexPage.vue") }],
  //   children: [{ path: "Feed", component: () => import("pages/FeedPage.vue") }],
  //   children: [{ path: "Treino", component: () => import("pages/FeedPage.vue") }],
  //   meta: { requiresAuth: true },
  // },

  // { path: '/user/:username/treino/:postId', component: () => import("pages/FeedPage.vue") },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
];

export default routes
