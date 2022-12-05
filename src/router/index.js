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
      path: "/product/:_id",
      name: "DetailProduct",
      component: () => import("../views/DetailProduct.vue"),
   },
   {
      path: "/categories",
      name: "Categories",
      component: Categories,
   },
   {
      path: "/category/:_id",
      name: "DetailProduct",
      component: () => import("../views/DetailCategory.vue"),
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
