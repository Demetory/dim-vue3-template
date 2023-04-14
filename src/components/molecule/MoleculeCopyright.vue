<script setup lang="ts">
// Core
import { computed } from "vue";
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";
import { useDateTZ, useDateToRoman } from "@/composables/useDate";
// Components
import AtomLink from "@/components/atom/AtomLink.vue";

// Data
const examplePiniaStore = useExamplePiniaStore();
const dateTZ: Date = useDateTZ(new Date(), "Asia/Jakarta");

// Computed properties
const computedYear = computed(() => {
  return new String(useDateToRoman(dateTZ.getFullYear()));
});
</script>

<template>
  <p class="copyright">
    {{ computedYear }} &copy; <AtomLink :link="examplePiniaStore.getLink('link-homepage')" /> |
    <AtomLink :link="examplePiniaStore.getLink('link-repo')" />
  </p>
</template>

<style scoped lang="scss">
.copyright {
  margin-top: 1rem;
  text-align: center;
}
</style>
