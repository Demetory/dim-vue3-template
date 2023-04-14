<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";
// Components
import AtomButton from "@/components/atom/AtomButton.vue";
import AtomIcon from "@/components/atom/AtomIcon.vue";
import AtomInput from "@/components/atom/AtomInput.vue";
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
    <template #heading>Pinia Example</template>
    <template #content>
      <p>Count: {{ examplePiniaStore.count }} | Input: {{ examplePiniaStore.input }}</p>
      <p>
        <AtomButton @click.stop="examplePiniaStore.doIncrement()">Increment</AtomButton>
        <AtomButton @click.stop="examplePiniaStore.doDecrement()">Decrement</AtomButton>
        <AtomInput v-model="examplePiniaStore.input" />
      </p>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-storage')" /></p>
    </template>
  </TemplateSlot>
</template>
