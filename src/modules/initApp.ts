// Composables
import { exampleLogo } from "@/modules/exampleLogo";
import { useConsoleImage } from "@/composables/useConsoleImage";

// By App Initialize
const initApp = () => {
  useConsoleImage(exampleLogo);
};

// Export
export { initApp };
