<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <TheHeader class="h-1/6" />
    <RouterView class="h-4/6" />
    <TheFooter class="h-1/6" />
  </div>
</template>

<style scoped></style>
