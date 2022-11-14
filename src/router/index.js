import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Categories from "../views/Categories.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
         title: "Furnilux Home",
      },
   },
   {
      path: "/products",
      name: "Products",
      component: Products,
      meta: {
         title: "Products",
      },
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

router.beforeEach((to, from, next) => {
   document.title = `${to.meta.title}`;
   next();
});

export default router;
