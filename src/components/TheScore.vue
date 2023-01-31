<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const getScore = computed(() => {
  return store.getters.getScore;
});
</script>

<template>
  <div
    class="bg-gray-50 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center"
  >
    <p class="text-center text-blue-900 font-semibold md:text-xl">SCORE</p>
    <p class="text-center text-gray-700 font-semibold text-4xl md:text-6xl">
      {{ getScore }}
    </p>
  </div>
</template>
