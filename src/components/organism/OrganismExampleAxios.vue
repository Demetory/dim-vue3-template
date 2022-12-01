<script setup lang="ts">
// Vue Core
import { ref } from "vue";

// Modules
import axios from "axios";

// Components
import IconModule from "@/components/atom/IconModule.vue";
import TemplateSlot from "@/components/template/TemplateSlot.vue";

// Data
const userInfo = ref(null);
const userLoad = ref(false);
const userError = ref(null);

// Methods
const getUserInfo = () => {
  userLoad.value = true;
  axios
    .get("/json/exampleUser.json")
    .then((response) => {
      userInfo.value = response.data;
      userLoad.value = false;
      userError.value = null;
    })
    .catch((error) => {
      userLoad.value = false;
      userError.value = error;
    });
};

const clearUserInfo = () => {
  userInfo.value = null;
  userLoad.value = false;
  userError.value = null;
};
</script>

<template>
  <TemplateSlot>
    <template #icon>
      <IconModule />
    </template>
    <template #heading>Axios Example</template>
    <template #content>
      <p>
        <button v-if="!userInfo" class="btn" @click.stop="getUserInfo">Get Data</button>
        <button v-else class="btn" @click.stop="clearUserInfo">Clear Data</button>
      </p>
      <p v-if="userLoad">Loading</p>
      <p v-if="userInfo">{{ userInfo }}</p>
      <p v-if="userError">{{ userError }}</p>
      <p>Axios <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener">official documentation</a></p>
    </template>
  </TemplateSlot>
</template>
