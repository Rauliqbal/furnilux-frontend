<template>
   <main>
      <Hero />
      <Statistic class="-mt-16 mb-[50px]" />
      <Categories class="py-[50px]" />
      <Products class="py-[50px]" />
      <AboutUs class="py-[50px]" />
      <Testimonial class="py-[50px] hidden md:block" />
      <Footer class="pt-[50px]" />
   </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Hero from "../components/homepage/Hero.vue";
import Statistic from "../components/homepage/Statistic.vue";
import Categories from "../components/homepage/Categories.vue";
import Products from "../components/homepage/Products.vue";
import AboutUs from "../components/homepage/AboutUs.vue";
import Testimonial from "../components/homepage/Testimonial.vue";
import Footer from "../components/Footer.vue";

const Items = ref([]);
async function getItemsData() {
   try {
      const response = await axios.get("https://zullkit-backend.buildwithangga.id/api/products?limit=3");
      Items.value = response.data.data.data;
   } catch (error) {}
}
onMounted(() => {
   getItemsData();
});
</script>
