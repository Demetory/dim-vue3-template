<script setup lang="ts">
// Modules
import { navi } from "@/assets/data/navi";
</script>

<template>
  <nav>
    <p>
      <RouterLink v-for="link in navi" :to="{ name: link.routeName }" :key="`navi-${link.routeName}`">
        {{ link.text }}
      </RouterLink>
    </p>
    <p>Last update: 2023-04-15</p>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;

  p {
    text-align: center;

    &:first-of-type {
      margin-bottom: grid.$gap;
    }

    &:last-of-type {
      font-size: 1.3rem;
    }
  }

  a:not(:last-child) {
    margin-right: grid.$gap;
  }
}
</style>
