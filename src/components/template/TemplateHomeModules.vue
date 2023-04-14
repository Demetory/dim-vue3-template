<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";
// Components
import AtomIcon from "@/components/atom/AtomIcon.vue";
import AtomLink from "@/components/atom/AtomLink.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="module" />
    </template>
    <template #heading>Installed Modules</template>
    <template #content>
      <ul>
        <li>Routing: <AtomLink :link="examplePiniaStore.getLink('link-router')" /></li>
        <li>Storage: <AtomLink :link="examplePiniaStore.getLink('link-storage')" /></li>
        <li>Utilities: <AtomLink :link="examplePiniaStore.getLink('link-utils')" /></li>
        <li>Promise based HTTP client: <AtomLink :link="examplePiniaStore.getLink('link-axios')" /></li>
        <li>CSS Preprocessor: <AtomLink :link="examplePiniaStore.getLink('link-sass')" /></li>
        <li>
          Code quality:
          <AtomLink :link="examplePiniaStore.getLink('link-eslint')" />
          +
          <AtomLink :link="examplePiniaStore.getLink('link-prettier')" />
        </li>
      </ul>
    </template>
  </TemplateSlot>
</template>
