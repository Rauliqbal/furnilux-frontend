<template>
   <div class="container">
      <h2 class="section-title mb-8">Discover Best Furniture</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <CardProducts v-for="product in products" :key="product" :id="product.id" :title="product.title" :image="product.image" :price="product.price" :rating="product.rating" :sold="product.sold" />
      </div>
   </div>
</template>

<script setup>
import CardProducts from "../CardProducts.vue";

const products = [
   {
      id: 1,
      title: "Mid-Century Chair",
      image: "mid-century.png",
      price: 199,
      rating: 4.5,
      sold: 200,
   },
   {
      id: 2,
      title: "Premium Table",
      image: "premium-table.png",
      price: 299,
      rating: 4.7,
      sold: 200,
   },
   {
      id: 3,
      title: "Wooden Table",
      image: "wooden-table.png",
      price: 199,
      rating: 4.2,
      sold: 200,
   },
   {
      id: 4,
      title: "Lux Sofa",
      image: "lux-sofa.png",
      price: 499,
      rating: 4.8,
      sold: 200,
   },
];
</script>
