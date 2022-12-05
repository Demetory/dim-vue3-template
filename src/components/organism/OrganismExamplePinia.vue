<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";

// Components
import AtomButton from "@/components/atom/AtomButton.vue";
import AtomInput from "@/components/atom/AtomInput.vue";
import IconModule from "@/components/atom/IconModule.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const examplePiniaStore = useExamplePiniaStore();
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconModule />
    </template>
    <template #heading>Pinia Example</template>
    <template #content>
      <p>Count: {{ examplePiniaStore.count }} | Input: {{ examplePiniaStore.input }}</p>
      <p>
        <AtomButton @click.stop="examplePiniaStore.increment()">Increment</AtomButton>
        <AtomButton @click.stop="examplePiniaStore.decrement()">Decrement</AtomButton>
        <AtomInput v-model="examplePiniaStore.input" />
      </p>
      <p>
        Pinia
        <a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noopener">official documentation</a>
      </p>
    </template>
  </TemplateSlot>
</template>
