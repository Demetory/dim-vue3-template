<script setup lang="ts">
// Components
import AtomCube from "@/components/atom/AtomCube.vue";
import MoleculeCopyright from "@/components/molecule/MoleculeCopyright.vue";
import MoleculeNavi from "@/components/molecule/MoleculeNavi.vue";
import OrganismSwitchColor from "../organism/OrganismSwitchColor.vue";
</script>

<template>
  <header>
    <section class="head-logo">
      <AtomCube />
      <h1 class="heading">Dim Vue 3 Template</h1>
      <MoleculeNavi />
      <OrganismSwitchColor />
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
    flex: 0 1 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto auto;
  }
  .switcher {
    margin-top: 64px;
  }
  .heading {
    margin: 1rem 0;
  }
}
</style>
