// Vue Core
import { ref } from "vue";
import { defineStore } from "pinia";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const count = ref(0);
  const input = ref("Test");
  const copyright = ref([]);

  // Methods
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const getCopyrightUrl = (key: string, value: string) => {
    const element: any = copyright.value.find((link) => link[key] === value);
    const result: any = element ? element.url : null;
    return result;
  };

  return { count, input, copyright, increment, decrement, getCopyrightUrl };
});

// Export
export { useExamplePiniaStore };
