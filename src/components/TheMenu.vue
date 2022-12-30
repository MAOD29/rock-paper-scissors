<template>
  <div class="flex justify-center items-center">
    <div
      class="relative top-6 flex flex-wrap justify-around items-baseline p-5 m-6 w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
    >
      <img class="-z-10 absolute w-56 lg:w-64 top-10" :src="bgTriangle" alt="" />
      <TheOptions
        :bgPrimary="bgPrimaryPaper"
        :bgSecondary="bgSecondaryPaper"
        :width="widthPaper"
        :iconPaper="iconPaper"
      />
      <TheOptions
        :bgPrimary="bgPrimaryScissors"
        :bgSecondary="bgSecondaryScissors"
        :width="widthScissors"
        :iconPaper="iconScissors"
      />
      <TheOptions
        :bgPrimary="bgPrimaryRock"
        :bgSecondary="bgSecondaryRock"
        :width="widthRock"
        :iconPaper="iconRock"
      />
    </div>
  </div>
</template>

<script setup>
import iconPaper from "../assets/img/icon-paper.svg";
import iconScissors from "../assets/img/icon-scissors.svg";
import iconRock from "../assets/img/icon-rock.svg";
import bgTriangle from "../assets/img/bg-triangle.svg";
import TheOptions from "./TheOptions.vue";

const bgPrimaryPaper = "#4B6AF1";
const bgSecondaryPaper = "#E5E9E5";
const widthPaper = "50%";

const bgPrimaryScissors = "#ECA520";
const bgSecondaryScissors = "#E5E9E5";
const widthScissors = "50%";

const bgPrimaryRock = "#DC3C56";
const bgSecondaryRock = "#E5E9E5";
const widthRock = "50%";
</script>
