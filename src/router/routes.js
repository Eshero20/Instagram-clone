const routes = [
  {
    path: "/",

    component: () => import("src/layouts/SimpleLayout.vue"),

    children: [
      {
        path: "",

        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },
  {
    path: "/home",

    component: () => import("src/layouts/MainLayout.vue"),

   
  },
  // new account login /NewAccount

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",

    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
