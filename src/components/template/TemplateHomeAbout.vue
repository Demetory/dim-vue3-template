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
      <AtomIcon name="documentation" />
    </template>
    <template #heading>Vue + Vite Starter Template</template>
    <template #content>
      <p>
        This project is served and bundled with <AtomLink :link="examplePiniaStore.getLink('link-vite')" />, uses
        <AtomLink :link="examplePiniaStore.getLink('link-ts')" /> for strong typing and
        <AtomLink :link="examplePiniaStore.getLink('link-sfc')" />.
      </p>
      <p>
        Vue’s <AtomLink :link="examplePiniaStore.getLink('link-vue')" /> provides you with all information you need to
        get started.
      </p>
      <p>Designed with <AtomLink :link="examplePiniaStore.getLink('link-pattern')" />.</p>
    </template>
  </TemplateSlot>
</template>
