<template>
   <router-link :to="'/product/' + id" class="flex flex-col overflow-hidden rounded-xl hover:ring-2 hover:-translate-y-1 hover:ring-green-700 transition">
      <div>
         <img class="w-full" :src="'/src/assets/image/' + image" alt="" />
      </div>
      <div class="bg-white p-3">
         <h4 class="text-gray-800 text-xl font-semibold">{{ title }}</h4>
         <div class="flex items-center">
            <div class="flex gap-1 my-1">
               <i class="bx bxs-star text-yellow-500 text-xl"></i>
               <span class="text-gray-400"> {{ rating }}</span>
            </div>
            <span class="text-gray-400 mx-1">-</span>
            <span class="text-sm text-gray-400">({{ sold }} sold)</span>
         </div>
         <h5 class="text-gray-800 text-xl font-semibold">${{ price }}</h5>
      </div>
   </router-link>
</template>

<script setup>
defineProps({
   id: Number,
   title: String,
   image: String,
   price: Number,
   rating: Number,
   sold: Number,
});
</script>
