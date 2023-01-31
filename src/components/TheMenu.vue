<script setup>
import constants from "../utils/constant.js";
import TheOptions from "../components/TheOptions.vue";
import TheRules from "../components/TheRules.vue";
import { useStore } from "vuex";

const store = useStore();

const chooseOption = (id) => {
  store.dispatch("addOption", id);
  store.dispatch("renderHome");
};
</script>

<template>
  <section
    class="relative md:mt-4 flex justify-center items-center"
  >
    <div class="gap-[1%] flex flex-wrap justify-around">
      <ul v-for="constant in constants" :key="constant.id">
        <TheOptions
          @click="chooseOption(constant.id)"
          :bgBorder="constant.color"
          :iconPaper="constant.icon"
        />
      </ul>
    </div>
    <TheRules />
  </section>
</template>
