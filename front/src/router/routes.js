const routes = [
  {
    path: "/",
    component: () => import("src/layouts/SimpleLayout.vue"),
    children: [
      {
        path: "",
        name: "LoginPage",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "HomePage",
        component: () => import("pages/HomePage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
