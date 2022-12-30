<script setup>
import Logo from "@/assets/img/logo.svg";
import TheScore from "./TheScore.vue";
</script>

<template>
  <div
    class="relative top-5 flex justify-around items-center p-5 border-2 border-gray-500 rounded-lg"
  >
    <img class="w-28 md:w-36" :src="Logo" />
    <TheScore />
  </div>
</template>
