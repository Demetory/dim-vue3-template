<script setup lang="ts">
// Components
import IconTooling from "@/components/atom/IconTooling.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconTooling />
    </template>
    <template #heading>Tooling</template>
    <template #content>
      <ul>
        <li>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>
          +
          <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>
        </li>
        <li>
          End-to-End testing framework:
          <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
        </li>
        <li>
          Unit testing framework:
          <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
        </li>
      </ul>
    </template>
  </TemplateSlot>
</template>
