// Modules
import { exampleLogo } from "@/modules/exampleLogo";
import { useConsoleImage } from "@/composables/useConsoleImage";

// Show Image in Console by App initialize
const initApp = () => {
  useConsoleImage(exampleLogo);
};

// Export
export { initApp };
