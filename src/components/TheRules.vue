<script setup>
import imgRules from "../assets/img/image-rules.svg";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

const statusDialog = computed(() => {
  return store.getters.showRules;
});

const showRules = () => {
  store.commit("showRules");
};
</script>

<template>
  <dialog
    :open="statusDialog"
    class="absolute h-screen rounded-lg w-full md:h-full bg-white z-10 md:w-3/6"
  >
    <div class="flex flex-col items-center h-full">
      <div class="h-1/5 flex items-center">
        <p class="text-center text-[#3C425B] font-bold text-4xl">RULES</p>
      </div>
      <div class="h-3/5 flex items-center">
        <img :src="imgRules" alt="The rules" />
      </div>
      <div class="h-1/5 flex items-center">
        <button
          type="button"
          @click="showRules"
          class="text-center text-4xl text-[#3C425B] opacity-50 block"
        >
          X
        </button>
      </div>
    </div>
  </dialog>
</template>