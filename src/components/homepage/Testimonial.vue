<template>
   <div>
      <div class="bg-[#1E1E1E]">
         <div class="container">
            <div class="flex flex-col lg:flex-row items-center gap-6">
               <div class="w-full py-10 px-6 lg:w-2/5">
                  <h3 class="text-2xl text-green-700 font-semibold mb-4">Happy Customers</h3>
                  <h2 class="section-title !text-white">What they say with our service</h2>
                  <div class="flex relative mt-10">
                     <img class="border-4 border-white rounded-full w-14" :src="user1" alt="" />
                     <img class="absolute ml-[40px] border-4 border-white rounded-full w-14" :src="user2" alt="" />
                     <img class="absolute ml-[72px] border-4 border-white rounded-full w-14" :src="user3" alt="" />
                     <img class="absolute ml-[104px] border-4 border-white rounded-full w-14" :src="user4" alt="" />
                     <img class="absolute ml-[136px] border-4 border-white rounded-full w-14" :src="user5" alt="" />
                     <div class="absolute ml-[136px] border-4 bg-white/60 rounded-full w-14 h-14 flex items-center justify-center font-bold">15K+</div>
                  </div>
                  <button class="btn-primary mt-6">Read More</button>
               </div>
               <div class="w-full lg:w-3/5 overflow-hidden">
                  <div class="flex gap-6 justify-center">
                     <img class="w-full md:w-[280px] lg:w-[320px] animate-floatUp" :src="testi1" alt="" />
                     <img class="w-full md:w-[280px] lg:w-[320px] animate-floatDown" :src="testi2" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import user1 from "/src/assets/image/user-1.png";
import user2 from "/src/assets/image/user-2.png";
import user3 from "/src/assets/image/user-3.png";
import user4 from "/src/assets/image/user-4.png";
import user5 from "/src/assets/image/user-5.png";

import testi1 from "/src/assets/image/testi1.png";
import testi2 from "/src/assets/image/testi2.png";
</script>
