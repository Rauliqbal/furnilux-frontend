<template>
   <router-link to="#" class="flex flex-col overflow-hidden rounded-xl">
      <div>
         <img class="w-full" :src="'https://raw.githubusercontent.com/Rauliqbal/restapi-nodejs/main/images/' + photo" alt="" />
      </div>
      <div class="bg-white p-3">
         <h4 class="text-gray-800 text-xl font-semibold hover:underline h-14">{{ name }}</h4>
         <div class="flex items-center">
            <div class="flex gap-1 my-1">
               <i class="bx bxs-star text-yellow-500 text-xl"></i>
               <span class="text-gray-400"> 4.5</span>
            </div>
            <span class="text-gray-400 mx-1">-</span>
            <span class="text-sm text-gray-400">(40 sold)</span>
         </div>
         <h5 class="text-gray-800 text-xl font-semibold">${{ price }}</h5>
      </div>
   </router-link>
</template>

<script setup>
defineProps({
   _id: String,
   name: String,
   photo: String,
   price: String,
});
</script>
