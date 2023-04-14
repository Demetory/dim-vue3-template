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
      <AtomIcon name="support" />
    </template>
    <template #heading>Support</template>
    <template #content>
      <p>
        Visit my homepage <AtomLink :link="examplePiniaStore.getLink('link-homepage')" /> and this repo on
        <AtomLink :link="examplePiniaStore.getLink('link-repo')" />
      </p>
    </template>
  </TemplateSlot>
</template>
