<script setup lang="ts">
// Modules
import { useLocalStorage, useMouse } from "@vueuse/core";

// Components
import IconModule from "@/components/atom/IconModule.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const { x, y } = useMouse();
const localStore = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconModule />
    </template>
    <template #heading>UseUse Example</template>
    <template #content>
      <p>Mouse Position: {{ x }} + {{ y }}</p>
      <p>Local Store: {{ localStore }}</p>
      <p>VueUse <a href="https://vueuse.org/guide/" target="_blank" rel="noopener">official documentation</a></p>
    </template>
  </TemplateSlot>
</template>
