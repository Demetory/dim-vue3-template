<script setup lang="ts">
// Components
import OrganismHomeAbout from "@/components/organism/OrganismHomeAbout.vue";
import OrganismHomeModules from "@/components/organism/OrganismHomeModules.vue";
import OrganismHomeSupport from "@/components/organism/OrganismHomeSupport.vue";
import OrganismHomeTooling from "@/components/organism/OrganismHomeTooling.vue";
</script>

<template>
  <div class="page-container">
    <OrganismHomeAbout />
    <OrganismHomeTooling />
    <OrganismHomeModules />
    <OrganismHomeSupport />
  </div>
</template>
