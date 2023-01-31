<script setup>
import TheOptions from "./TheOptions.vue";
import TheResult from "./TheResult.vue";
import TheRules from "./TheRules.vue";
import constants from "../utils/constant.js";
import { getResultGame, opponentOption } from "../composables/useOptions.js";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const pickedOption = computed(() => {
  return store.getters.getOption;
});
const youPicked = constants.find(
  (constant) => constant.id == pickedOption.value
);
const opponentPicked = opponentOption();
const resultGame = getResultGame(youPicked, opponentPicked);
const classWinner = "shadow-2xl shadow-gray-300";

</script>
<template>
  <section class="relative md:mt-4 flex flex-col justify-center items-center">
    <div class="flex flex-wrap justify-around gap-2 md:gap-12">
      <div class="flex flex-col items-center">
        <TheOptions
          :class="resultGame == 1 ? classWinner : ''"
          :bgBorder="youPicked.color"
          :iconPaper="youPicked.icon"
        />
        <p class="text-center text-white text-xl font-bold">You Picked</p>
      </div>
      <div class="flex flex-col items-center">
        <TheOptions
        :class="resultGame == 2 ? classWinner : ''"
          :bgBorder="opponentPicked.color"
          :iconPaper="opponentPicked.icon"
        />
        <p class="text-center text-white text-xl font-bold">Opponent Picked</p>
      </div>
    </div>
    <div class="relative p-6">
      <TheResult :resultGame="resultGame" />
    </div>
    <TheRules />
  </section>
</template>
