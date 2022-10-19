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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",

    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
