<script setup lang="ts">
// Vue Core
import { computed } from "vue";

// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";

// Components
import AtomLink from "@/components/atom/AtomLink.vue";

// Composables
import { useDateTZ, useDateToRoman } from "@/composables/useDate";

// Data
const examplePiniaStore = useExamplePiniaStore();
const date: Date = new Date();
const dateTZ: Date = useDateTZ(date, "Asia/Jakarta");

// Computed Properties
const getYear = computed(() => {
  return new String(useDateToRoman(dateTZ.getFullYear()));
});

const getCopyright = computed(() => {
  return examplePiniaStore.copyright;
});
</script>

<template>
  <p class="copyright">
    {{ getYear }} &copy;

    <template v-for="(item, index) in getCopyright" :key="`link-${index}`">
      <AtomLink :link="item" />
      <span v-if="index !== Object.keys(getCopyright).length - 1"> | </span>
    </template>
  </p>
</template>

<style scoped lang="scss">
.copyright {
  margin-top: 1rem;
  text-align: center;
}
</style>
