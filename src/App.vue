<script setup lang="ts">
// Vue Core
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

// Modules
import axios from "axios";
import { initApp } from "@/modules/initApp";
import { useExamplePiniaStore } from "@/stores/examplePinia";

// Components
import MoleculeHeader from "@/components/molecule/MoleculeHeader.vue";

// Data
const route = useRoute();
const examplePiniaStore = useExamplePiniaStore();
const exampleDataLoading = ref(false);
const exampleDataError = ref(null);

// Hooks
onBeforeMount(() => {
  initApp();
  getExampleData();
});

// Computed Properties
const getPageName = computed<string>(() => {
  return `page-${String(route.name)}`;
});

// Methods
const getExampleData = () => {
  exampleDataLoading.value = true;
  axios
    .get("/json/exampleCopyright.json")
    .then((response) => {
      examplePiniaStore.copyright = response.data;
      exampleDataLoading.value = false;
      exampleDataError.value = null;
    })
    .catch((error) => {
      exampleDataLoading.value = false;
      exampleDataError.value = error;
    });
};
</script>

<template>
  <MoleculeHeader />

  <RouterView v-slot="{ Component }">
    <main :class="`page ${getPageName}`">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </main>
  </RouterView>
</template>
