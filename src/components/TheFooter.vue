<script setup>
import { useStore } from "vuex";
const store = useStore();
const showRules = () => {
  store.commit("showRules");
};
</script>

<template>
  <footer class="flex justify-center md:justify-end md:mr-24 mt-4">
    <button
      type="button"
      @click="showRules"
      class="realtive w-32 h-12 border-2 border-gray-500 rounded-lg text-white font-semibold text-xl md:text-3xl hover:bg-[#1D3151]"
    >
      RULES
    </button>
  </footer>
</template>
