import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Categories from "../views/Categories.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/products",
      name: "Products",
      component: Products,
   },
   {
      path: "/categories",
      name: "Categories",
      component: Categories,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
