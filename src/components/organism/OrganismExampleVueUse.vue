<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";
import { useLocalStorage, useMouse } from "@vueuse/core";
// Components
import AtomIcon from "@/components/atom/AtomIcon.vue";
import AtomLink from "@/components/atom/AtomLink.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const examplePiniaStore = useExamplePiniaStore();
const localStore = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
const { x, y } = useMouse();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="module" />
    </template>
    <template #heading>UseUse Example</template>
    <template #content>
      <p>Mouse Position: {{ x }} + {{ y }}</p>
      <p>Local Store: {{ localStore }}</p>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-utils')" /></p>
    </template>
  </TemplateSlot>
</template>
