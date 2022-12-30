<template>
  <dialog
    open
    class="rounded-lg absolute w-full h-full top-0 h-screen flex flex-col items-center p-5 bg-white z-10 md:relative md:w-80 md:h-auto"
  >
    <div
      class="h-1/5 flex items-center md:justify-around md:items-start md:w-full"
    >
      <p class="text-center text-[#3C425B] font-bold text-4xl md:text-2xl">
        RULES
      </p>
      <button
        class="text-center text-4xl text-[#3C425B] hidden md:block md:opacity-50"
      >
        X
      </button>
    </div>
    <div class="h-3/5 md:h-4/5 flex items-center">
      <img :src="imgRules" alt="The rules" />
    </div>
    <div class="h-1/5 flex items-center md:hidden">
      <button class="text-center text-4xl text-[#3C425B] opacity-50">X</button>
    </div>
  </dialog>
</template>

<script setup>
import imgRules from "../assets/img/image-rules.svg";
</script>
