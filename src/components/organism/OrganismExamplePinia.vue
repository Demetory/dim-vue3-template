<script setup lang="ts">
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";

// Components
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
        <button class="btn" @click.stop="examplePiniaStore.increment()">Increment</button>
        <button class="btn" @click.stop="examplePiniaStore.decrement()">Decrement</button>
        <input class="input" v-model="examplePiniaStore.input" type="text" />
      </p>
      <p>
        Pinia
        <a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noopener">official documentation</a>
      </p>
    </template>
  </TemplateSlot>
</template>
