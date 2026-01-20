export const validateAndReturnLength = (arr: Array<number>) => {
  if (!arr || arr.length === 0) return { array: arr, n: 0 };

  return { array: arr, n: arr.length };
};
