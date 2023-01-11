<script setup>
import iconPaper from "../assets/img/icon-paper.svg";
import iconScissors from "../assets/img/icon-scissors.svg";
import iconRock from "../assets/img/icon-rock.svg";
// import bgTriangle from "../assets/img/bg-triangle.svg";
import TheOptions from "../components/TheOptions.vue";
import TheRules from "../components/TheRules.vue";

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

<template>
  <main class="relative md:mt-4 flex justify-center items-center">
    <div class="gap-[1%] flex flex-wrap justify-around">
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
    <TheRules />
  </main>
</template>
