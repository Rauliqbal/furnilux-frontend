<template>
   <main>
      <Hero />
      <Statistic class="-mt-16 mb-[50px]" />
      <Categories class="py-[50px]" />
      <Product class="py-[50px]" />
      <AboutUs class="py-[50px]" />
      <Testimonial class="py-[50px] hidden md:block" />
      <Footer class="pt-[50px]" />
   </main>
</template>

<script setup>
import Hero from "../components/homepage/Hero.vue";
import Statistic from "../components/homepage/Statistic.vue";
import Categories from "../components/homepage/Categories.vue";
import Product from "../components/homepage/Product.vue";
import AboutUs from "../components/homepage/AboutUs.vue";
import Testimonial from "../components/homepage/Testimonial.vue";
import Footer from "../components/Footer.vue";
</script>
