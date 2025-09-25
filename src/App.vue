<script setup lang="ts">
// Core
import { useRoute } from 'vue-router';
// Modules
import { initApp } from '@/modules/initApp';
// Components
import MoleculeHeader from '@/components/molecule/MoleculeHeader.vue';

// Router
const route = useRoute();

// Here we go
void initApp();
</script>

<template>
  <MoleculeHeader />

  <RouterView v-slot="{ Component }">
    <main :class="`page page-${String(route.name)}`">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </main>
  </RouterView>
</template>
