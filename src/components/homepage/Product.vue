<template>
   <div class="container">
      <h2 class="section-title mb-8">Discover Best Furniture</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>

      <swiper
         :breakpoints="swiperOptions.breakpoints"
         :spaceBetween="30"
         :pagination="{
            clickable: true,
         }"
         :modules="modules"
         class="mySwiper"
      >
         <swiper-slide class="pb-10" v-for="product in products.slice(0, 4)" :key="product._id">
            <CardProducts :_id="product._id" :name="product.name" :photo="product.photo" :price="product.price" />
         </swiper-slide>
      </swiper>
   </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import CardProducts from "../CardProducts.vue";
import { Pagination } from "swiper";
import axios from "axios";
import { ref } from "vue";
import dataProduct from "../../api/products.json";

export default {
   components: { CardProducts, Swiper, SwiperSlide },

   data() {
      return {
         swiperOptions: {
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
               },
            },
         },
         products: ref(dataProduct),
      };
   },
};
</script>
