<template>
  <div
    class="flex justify-center items-center w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
    :style="{ backgroundColor: bgPrimary }"
  >
    <div
      class="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28  rounded-full"
      :style="{ backgroundColor: bgSecondary }"
    >
      <img :style="{ width: width }" :src="iconPaper" alt="" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  bgPrimary: String,
  bgSecondary: String,
  iconPaper: String,
  width: String,
});
const { bgPrimary, bgSecondary, iconPaper, width } = toRefs(props);
</script>
