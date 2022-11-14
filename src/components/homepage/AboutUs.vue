<template>
   <div class="flex flex-col md:flex-row items-center gap-10">
      <img class="w-full md:w-1/2 h-[28rem] object-cover md:rounded-r-3xl" :src="aboutImg" alt="" />
      <div class="w-full md:w-1/2 px-6 md:px-16 lg:px-20 xl:px-32">
         <h3 class="text-2xl text-green-700 font-semibold mb-4">About us</h3>
         <h2 class="section-title">We always prioritize quality and comfort in our furniture</h2>
         <p class="mt-6 text-gray-500">With talented designers and craftsmen, we create the best furniture and provide comfort for users. We will also innovate to make high quality furniture.</p>
         <div class="flex flex-col md:flex-row gap-4 md:gap-8 mt-10">
            <button class="btn-primary">Explore Product</button>
            <button class="btn-secondary">Order Custom</button>
         </div>
      </div>
   </div>
</template>

<script setup>
import aboutImg from "/src/assets/image/about-image.png";
</script>
