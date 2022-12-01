<script setup lang="ts">
// Data
const data = [
  { text: "Home", routeName: "home" },
  { text: "Login", routeName: "login" },
  { text: "Secret", routeName: "secret" },
  { text: "Examples", routeName: "examples" },
];
</script>

<template>
  <nav>
    <p>
      <RouterLink v-for="link in data" :to="{ name: link.routeName }" :key="`navi-${link.routeName}`">
        {{ link.text }}
      </RouterLink>
    </p>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;

  a:not(:last-child) {
    margin-right: grid.$gap;
  }
}
</style>
