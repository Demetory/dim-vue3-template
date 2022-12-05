<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";

// Components
import IconSupport from "@/components/atom/IconSupport.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const examplePiniaStore = useExamplePiniaStore();

// Methods
const getLinkUrl = (value: string) => {
  return examplePiniaStore.getCopyrightUrl("type", value);
};
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconSupport />
    </template>
    <template #heading>Support</template>
    <template #content>
      <p>
        Visit my
        <a :href="getLinkUrl('homepage')" target="_blank" rel="noopener">homepage</a>
        and this
        <a :href="getLinkUrl('repo')" target="_blank" rel="noopener">template repo</a>
      </p>
    </template>
  </TemplateSlot>
</template>
