<script setup>
// import { ref } from "vue";
import TheOptions from "./TheOptions.vue";
import TheResult from "./TheResult.vue";
const bgPrimaryYou = "#4B6AF1";
const bgSecondaryYou = "#E5E9E5";
const widthYou = "50%";
const iconYou = "";
const bgPrimaryOpponent = "#192845";
const bgSecondaryOpponent = "#192845";
const widthOpponent = "50%";
const iconOpponent = "";

// const showIconOpponent = () => {
//     setTimeout(() => {
//         iconOpponent
//     }, 100);
// }
</script>

<template>
  <div class="md:flex md:justify-center">
    <div
      class="flex justify-around relative top-8 gap-3 items-baseline p-5 m-6 md:w-80 md:-80"
    >
      <div class="flex flex-col items-center">
        <TheOptions
          :bgPrimary="bgPrimaryYou"
          :bgSecondary="bgSecondaryYou"
          :width="widthYou"
          :iconPaper="iconYou"
        />
        <p class="text-center text-white text-xl font-bold">You Picked</p>
      </div>
      <div class="flex flex-col items-center">
        <TheOptions
          :bgPrimary="bgPrimaryOpponent"
          :bgSecondary="bgSecondaryOpponent"
          :width="widthOpponent"
          :iconPaper="iconOpponent"
        />
        <p class="text-center text-white text-xl font-bold">Opponent Picked</p>
      </div>
    </div>
  </div>
  <TheResult />
</template>