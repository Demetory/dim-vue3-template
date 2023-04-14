<script setup lang="ts">
// Modules
import { initApp } from "@/modules/initApp";
// Components
import MoleculeHeader from "@/components/molecule/MoleculeHeader.vue";

// Here we go
void initApp();
</script>

<template>
  <MoleculeHeader />

  <RouterView v-slot="{ Component }">
    <main :class="`page page-${String($route.name)}`">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </main>
  </RouterView>
</template>
