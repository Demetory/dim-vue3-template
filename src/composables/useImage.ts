// Returns dynamic image path
const useImage = (image: string) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
};

// Export
export { useImage };
