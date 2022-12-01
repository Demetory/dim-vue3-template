<script setup lang="ts">
// Modules

// Components
import OrganismExampleAxios from "@/components/organism/OrganismExampleAxios.vue";
import OrganismExamplePinia from "@/components/organism/OrganismExamplePinia.vue";
import OrganismExampleVueUse from "@/components/organism/OrganismExampleVueUse.vue";
</script>

<template>
  <div class="page-container">
    <div class="page-container">
      <OrganismExampleVueUse />
      <OrganismExampleAxios />
      <OrganismExamplePinia />
    </div>
  </div>
</template>
