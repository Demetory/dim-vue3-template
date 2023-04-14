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
      <AtomIcon name="tooling" />
    </template>
    <template #heading>Tooling</template>
    <template #content>
      <ul>
        <li>
          Recommended IDE setup:
          <AtomLink :link="examplePiniaStore.getLink('link-ide')" /> +
          <AtomLink :link="examplePiniaStore.getLink('link-volar')" /> +
          <AtomLink :link="examplePiniaStore.getLink('link-devtools')" />
        </li>
        <li>End-to-End testing framework: <AtomLink :link="examplePiniaStore.getLink('link-e2e')" /></li>
        <li>Unit testing framework: <AtomLink :link="examplePiniaStore.getLink('link-unit')" /></li>
      </ul>
    </template>
  </TemplateSlot>
</template>
