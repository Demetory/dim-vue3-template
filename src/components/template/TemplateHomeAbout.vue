<script setup lang="ts">
// Components
import IconDocumentation from "@/components/atom/IconDocumentation.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconDocumentation />
    </template>
    <template #heading>Vue + Vite Starter Template</template>
    <template #content>
      <p>
        This project is served and bundled with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>, uses
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a> for strong typing and
        <a href="https://vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noopener">Script Setup SFC</a>.
      </p>
      <p>
        Vue’s
        <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
        provides you with all information you need to get started.
      </p>
      <p>Designed with <a href="https://vuefront.com/develop/" target="_blank" rel="noopener">Atomic Pattern</a>.</p>
    </template>
  </TemplateSlot>
</template>
