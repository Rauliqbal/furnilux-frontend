<template>
   <div class="container">
      <h2 class="section-title mb-8">Popular Categories</h2>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
         <router-link :to="'/category/' + category._id" class="overflow-hidden relative rounded-xl group" v-for="category in categories" :key="category.id">
            <img class="object-cover w-full h-full group-hover:scale-105 transition-all duration-200 ease-out" :src="'https://raw.githubusercontent.com/Rauliqbal/restapi-nodejs/main/images/' + category.photo" alt="" />
            <div class="absolute inset-x-2 md:inset-x-4 px-0 md:px-10 py-3 bg-white/20 backdrop-blur-sm bottom-2 md:bottom-4 rounded-md">
               <h3 class="text-center text-sm md:text-2xl text-white font-bold mt-1 capitalize">{{ category.name }}</h3>
               <p class="text-center text-white text-sm md:text-base">{{ category.products_count }} Products</p>
            </div>
         </router-link>
      </div>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const categories = ref([]);

async function getCategories() {
   try {
      const response = await axios.get("https://restapi-nodejs-production-e712.up.railway.app/api/categories");
      categories.value = response.data;
   } catch (error) {}
}

onMounted(() => {
   getCategories();
});
</script>
