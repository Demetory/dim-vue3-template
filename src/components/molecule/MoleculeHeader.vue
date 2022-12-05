<script setup lang="ts">
// Components
import AtomCube from "@/components/atom/AtomCube.vue";
import MoleculeCopyright from "@/components/molecule/MoleculeCopyright.vue";
import MoleculeNavi from "@/components/molecule/MoleculeNavi.vue";
</script>

<template>
  <header>
    <section class="head-logo">
      <AtomCube />
      <h1 class="heading">Dim Vue 3 Template</h1>
      <MoleculeNavi />
    </section>
    <MoleculeCopyright />
  </header>
</template>

<style scoped lang="scss">
header {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 33%;
  padding: grid.$gap;

  .head-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .heading {
    margin: 1rem 0;
  }
}
</style>
