<script setup lang="ts">
// Core
import { computed } from "vue";
// Modules
import { useExamplePiniaStore } from "@/stores/examplePinia";
// Components
import AtomButton from "@/components/atom/AtomButton.vue";
import AtomIcon from "@/components/atom/AtomIcon.vue";
import AtomLink from "@/components/atom/AtomLink.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const examplePiniaStore = useExamplePiniaStore();

// Computed properties
const computedUserInfo = computed(() => {
  return examplePiniaStore.userInfo;
});

const computedLoading = computed(() => {
  return examplePiniaStore.loading;
});

const computedError = computed(() => {
  return examplePiniaStore.error;
});
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <AtomIcon name="module" />
    </template>
    <template #heading>Axios Example</template>
    <template #content>
      <p>
        <AtomButton v-if="!computedUserInfo" @click.stop="examplePiniaStore.getUserInfo">Get Data</AtomButton>
        <AtomButton v-else @click.stop="examplePiniaStore.clearUserInfo">Clear Data</AtomButton>
      </p>
      <p v-if="computedLoading">Loading</p>
      <p v-if="computedUserInfo">{{ computedUserInfo }}</p>
      <p v-if="computedError">{{ computedError }}</p>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-axios')" /></p>
    </template>
  </TemplateSlot>
</template>
