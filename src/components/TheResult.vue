<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
import { resultGame } from "../utils/constant.js";

const props = defineProps({
  resultGame: String,
});
const store = useStore();

const redirectHome = () => {
  store.dispatch("renderHome");
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl text-white font-bold p-4">
      {{ resultGame.get(props.resultGame) }}
    </h1>
    <button
      type="button"
      class="bg-white text-black text-xl rounded-lg p-4 hover:bg-opacity-50"
      @click="redirectHome"
    >
      PLAY AGAIN
    </button>
  </div>
</template>
