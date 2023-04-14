// Core
import { ref } from "vue";
import { defineStore } from "pinia";
// Modules
import axios from "axios";
import { links } from "@/assets/data/links";
// Types
import { ILink } from "@/types/ILink";
import { IUser } from "@/types/IUser";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const count = ref(0);
  const error = ref<Object | null>();
  const input = ref("Test");
  const loading = ref(false);
  const userInfo = ref<IUser | null>();

  // Methods
  const doIncrement = () => {
    count.value++;
  };

  const doDecrement = () => {
    count.value--;
  };

  const getLink = (value: string) => {
    return links.find((link) => link.type === value) as ILink;
  };

  const getUserInfo = () => {
    loading.value = true;
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        userInfo.value = response.data as IUser;
        loading.value = false;
        error.value = null;
      })
      .catch((error) => {
        loading.value = false;
        error.value = error;
        throw Error(error);
      });
  };

  const clearUserInfo = () => {
    userInfo.value = null;
    loading.value = false;
    error.value = null;
  };

  // Return
  return {
    count,
    error,
    input,
    links,
    loading,
    userInfo,
    doIncrement,
    doDecrement,
    getLink,
    getUserInfo,
    clearUserInfo,
  };
});

// Export
export { useExamplePiniaStore };
