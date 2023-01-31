<script setup>
import ThePicked from "../components/ThePicked.vue";
import TheMenu from "../components/TheMenu.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const renderHome = computed(() => {
  return store.getters.getRenderHome;
});
</script>

<template>
  <TheMenu v-if="renderHome" />
  <ThePicked v-else />
</template>
