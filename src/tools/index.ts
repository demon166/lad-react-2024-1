export const createArray = (pages: number) => {
  return Array.from({ length: pages }, (_, i) => {
    return i + 1;
  });
};
