<script setup>
import Logo from "@/assets/img/logo.svg";
import TheScore from "./TheScore.vue";
</script>

<template>
  <header class="relative mt-4 flex justify-center">
    <div
      class="border-2 border-gray-500 rounded-lg w-5/6 flex justify-around items-center"
    >
      <img class="w-28 md:w-36 lg:w-38" :src="Logo" alt="Logo del juego" />
      <TheScore />
    </div>
  </header>
</template>
