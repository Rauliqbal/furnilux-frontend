<template>
   <div class="inset-x-0 w-full z-20 fixed shadow-md bg-white">
      <div class="container py-4 md:py-6">
         <div class="flex items-center justify-between">
            <div class="relative z-30">
               <router-link to="/">
                  <img class="" :src="logo" alt="Logo Hi Studio" />
               </router-link>
            </div>

            <div class="flex items-center justify-end relative pr-6">
               <input type="checkbox" name="hamburger" id="hamburger" class="peer hidden" />
               <label for="hamburger" class="peer-checked:hamburger block relative z-30 -mr-6 cursor-pointer lg:hidden">
                  <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gray-500 transition duration-300"></div>
                  <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-500 transition duration-300"></div>
               </label>

               <div class="peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] bg-white lg:bg-transparent transition duration-300 lg:w-auto lg:static lg:translate-x-0 z-20">
                  <div className="flex flex-col h-full justify-between pb-10 md:pb-0 lg:items-center lg:flex-row ml-0 ">
                     <ul className="container pt-32 text-gray-700 space-y-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        <li>
                           <router-link to="/" class="text-lg text-slate-500 hover:text-slate-900 transition-all duration-200 ease-out">Home </router-link>
                        </li>
                        <li>
                           <router-link to="/products" class="text-lg text-slate-500 hover:text-slate-900 transition-all duration-200 ease-out">Products</router-link>
                        </li>
                        <li>
                           <router-link to="/products" class="text-lg text-slate-500 hover:text-slate-900 transition-all duration-200 ease-out">Categories</router-link>
                        </li>
                        <li>
                           <button to="#" class="text-lg text-slate-500 hover:text-slate-900 transition-all duration-200 ease-out">Contact</button>
                        </li>
                     </ul>
                     <div class="container block md:hidden">
                        <div class="flex flex-col gap-4">
                           <button class="px-6 py-3 text-green-700 bg-slate-100 font-bold text-sm rounded-md hover:bg-slate-300 transition duration-200">Sign In</button>
                           <button class="px-6 py-3 text-white bg-green-700 font-bold text-sm rounded-md hover:bg-green-900 transition duration-200">Sign Up</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="hidden lg:block">
               <div class="flex gap-4">
                  <button class="px-6 py-3 text-green-700 bg-slate-100 font-bold text-sm rounded-md hover:bg-slate-300 transition duration-200">Sign In</button>
                  <button class="px-6 py-3 text-white bg-green-700 font-bold text-sm rounded-md hover:bg-green-900 transition duration-200">Sign Up</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import logo from "../assets/image/logo.svg";
</script>
