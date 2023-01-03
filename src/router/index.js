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
         title: "Home",
      },
   },
   {
      path: "/products",
      name: "Products",
      component: Products,
      meta: {
         title: "All Products",
      },
   },

   {
      path: "/categories",
      name: "Categories",
      component: Categories,
      meta: {
         title: "All Categories",
      },
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach((to, from, next) => {
   document.title = `Furnilux - ${to.meta.title}`;
   next();
});

export default router;
