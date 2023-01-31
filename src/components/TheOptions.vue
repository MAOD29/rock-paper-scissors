<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  bgBorder: String,
  iconPaper: String,
});
const { bgBorder, iconPaper } = toRefs(props);
</script>

<template>
  <div
    class="flex justify-center items-center w-32 h-32 md:w-36 md:h-36  lg:w-48 lg:h-48 rounded-full active:shadow-xl active:shadow-gray-300"
    :style="{ backgroundColor: bgBorder }"
  >
    <button
      class="flex justify-center items-center w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-white hover:bg-opacity-50"
    >

      <img v-if="iconPaper" class="w-1/2" :src="iconPaper" alt="Icon to play" />
    </button>
  </div>
</template>
