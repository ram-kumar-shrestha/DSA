/**
 * Measures the execution time of a function
 * @param fn - The function to measure
 * @param args - Arguments to pass to the function
 * @returns Object containing the result and execution time in milliseconds
 */
export function measureTime<T>(
  fn: (...args: any[]) => T,
  ...args: any[]
): { result: T; time: string } {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  const time = (end - start).toFixed(4);

  return { result, time };
}

/**
 * Prints execution time and result
 * @param label - Label for the algorithm
 * @param fn - The function to measure
 * @param args - Arguments to pass to the function
 */
export function runWithTiming<T>(
  label: string,
  fn: (...args: any[]) => T,
  ...args: any[]
): T {
  const originalArgs = args.map((arg) => (Array.isArray(arg) ? [...arg] : arg));
  const { result, time } = measureTime(fn, ...args);
  console.log(`${label} Input:`, originalArgs);
  console.log(`${label} Output:`, result);
  console.log(`${label} Time: ${time}ms`);
  return result;
}
