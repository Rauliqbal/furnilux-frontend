<template>
   <div class="container">
      <h2 class="section-title mb-8">Discover Best Furniture</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div class="pb-10" v-for="product in products.slice(0, 4)" :key="product._id">
            <CardProducts :_id="product._id" :name="product.name" :photo="product.photo" :price="product.price" />
         </div>
      </div>
   </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import CardProducts from "../CardProducts.vue";

const products = ref([]);
const getproducts = async () => {
   try {
      let response = await axios.get("https://restapi-nodejs-production-e712.up.railway.app/api/products");
      products.value = response.data;
   } catch (err) {
      console.log(err);
   }
};
onMounted(() => {
   getproducts();
});
</script>
