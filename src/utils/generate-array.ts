export const generateArray = (
  size: number = 10,
  max: number = 1000,
): number[] => {
  const arr = Array.from({ length: size }, () =>
    Math.floor(Math.random() * max),
  );

  // Fisher–Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};
