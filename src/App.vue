<template>
   <router-view v-slot="{ Component }">
      <Navbar />
      <transition name="fade" mode="out-in">
         <component :is="Component" />
      </transition>
   </router-view>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style type="text/css">
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
