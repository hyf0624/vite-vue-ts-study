const routes = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"), //路由懒加载
  },
  {
    path: "/home",
    component: () => import("@/views/home.vue"),
  },
];

export default routes;
