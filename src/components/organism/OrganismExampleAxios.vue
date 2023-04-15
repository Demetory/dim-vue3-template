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
  return examplePiniaStore.errorMsg;
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
        <AtomButton
          v-if="!computedUserInfo"
          :loading="computedLoading"
          label="Get Data"
          @click="examplePiniaStore.getUserInfo"
        />
        <AtomButton v-else :loading="computedLoading" label="Clear Data" @click="examplePiniaStore.clearUserInfo" />
      </p>
      <p v-if="computedLoading">Loading</p>
      <p v-if="computedUserInfo">{{ computedUserInfo }}</p>
      <p v-if="computedError" class="error">{{ computedError }}</p>
      <p>Official documentation: <AtomLink :link="examplePiniaStore.getLink('link-axios')" /></p>
    </template>
  </TemplateSlot>
</template>

<style scoped lang="scss">
p:not(:last-of-type) {
  margin-bottom: calc(grid.$gap / 2);
  .atom-button {
    min-width: 110px;
  }
}
</style>
