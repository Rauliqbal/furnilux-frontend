<template>
   <div class="container">
      <h2 class="section-title mb-8">Discover Best Furniture</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
         <div v-for="product in products" :key="product._id">
            <CardProducts :_id="product._id" :name="product.name" :photo="product.photo" :price="product.price" />
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import CardProducts from "../CardProducts.vue";
import dataProducts from "../../api/products.json";

const products = ref(dataProducts);
</script>
