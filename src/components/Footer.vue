<template>
   <div>
      <div class="border-t-2 border-gray-200">
         <div class="container">
            <div class="flex flex-col gap-20 md:gap-40 md:flex-row justify-between py-12">
               <div>
                  <img :src="logo" alt="" />
                  <h4 class="text-gray-500 w-[280px] mt-6">We provide hight quality furniture and beautiful your room.</h4>
                  <div class="mt-8 flex gap-4">
                     <a href="#" class="text-3xl text-gray-500 hover:text-gray-700 transition duration-200 ease-out">
                        <i class="bx bxl-facebook"></i>
                     </a>
                     <a href="#" class="text-3xl text-gray-500 hover:text-gray-700 transition duration-200 ease-out">
                        <i class="bx bxl-instagram"></i>
                     </a>
                     <a href="#" class="text-3xl text-gray-500 hover:text-gray-700 transition duration-200 ease-out">
                        <i class="bx bxl-amazon"></i>
                     </a>
                     <a href="#" class="text-3xl text-gray-500 hover:text-gray-700 transition duration-200 ease-out">
                        <i class="bx bxl-tiktok"></i>
                     </a>
                  </div>
               </div>
               <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div>
                     <h4 class="text-base md:text-xl font-semibold text-gray-800">Our Categories</h4>
                     <ul class="mt-4 md:mt-5">
                        <li class="my-2 text-sm md:text-base capitalize" v-for="category in categories" :key="category.id">
                           <a href="#" class="text-gray-400 hover:text-gray-700 transition duration-200 ease-out">{{ category.name }}</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h4 class="text-base md:text-xl font-semibold text-gray-800">Supports</h4>
                     <ul class="mt-4 md:mt-5">
                        <li class="my-2 text-sm md:text-base capitalize" v-for="support in supports" :key="support.id">
                           <a href="#" class="text-gray-400 hover:text-gray-700 transition duration-200 ease-out">{{ support.name }}</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h4 class="text-base md:text-xl font-semibold text-gray-800">Our Categories</h4>
                     <ul class="mt-4 md:mt-5">
                        <li class="my-2 text-sm md:text-base capitalize" v-for="address in address" :key="address.id">
                           <a href="#" class="text-gray-400 hover:text-gray-700 transition duration-200 ease-out">{{ address.name }}</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <h6 class="text-sm md:text-base text-gray-500 text-center pb-10">Copyright 2022 • All rights reserved</h6>
         </div>
      </div>
   </div>
</template>

<script setup>
import logo from "../assets/image/logo.svg";
import axios from "axios";
import { onMounted, ref } from "vue";

const categories = ref([]);
async function getCategories() {
   try {
      const response = await axios.get("https://furnilux-rest-api.herokuapp.com/api/categories");
      categories.value = response.data;
   } catch (err) {}
}
onMounted(() => {
   getCategories();
});

const supports = [
   {
      name: "contact us",
   },
   {
      name: "faq",
   },
   {
      name: "Privacy",
   },
   {
      name: "terms & conditions",
   },
];

const address = [
   {
      name: "support@furnilux",
   },
   {
      name: "021 - 1324 - 0203",
   },
   {
      name: "Cikarang Barat, Kab.Bekasi, Jawa Barat",
   },
];
</script>
