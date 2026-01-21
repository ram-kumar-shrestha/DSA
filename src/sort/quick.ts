import { generateArray } from "../utils/arr/generate-array";
import { validateAndReturnLength } from "../utils/arr/validate-worst.case";
import { runWithTiming } from "../utils/timer";

/**
 * Partitions the array around a pivot element (last element in the range).
 * Elements smaller than the pivot are moved to the left, larger elements to the right.
 *
 * @param {Array<number>} arr
 *   The array to partition.
 *
 * @param {number} low
 *   The starting index of the partition range (default: 0).
 *
 * @param {number} high
 *   The ending index of the partition range (pivot element).
 *
 * @returns {number}
 *   The final index position of the pivot element after partitioning.
 */
function partition(arr: Array<number>, low: number = 0, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

/**
 * Quick Sort works by **selecting a pivot element and partitioning**
 * the array around it. Elements smaller than the pivot are moved to
 * the left, and larger elements to the right. This process is recursively
 * applied to the left and right subarrays until the entire array is sorted.
 * It uses a divide-and-conquer strategy with in-place partitioning.
 *
 * Time Complexity:
 * - Best / Average Case: O(n log n)
 * - Worst Case: O(n²) (when pivot choices are poor, e.g., already sorted)
 *
 * Space Complexity: O(log n) (due to recursion stack)
 *
 * @param {Array<number>} arr
 *   The array of numbers to sort (must be a valid array of numbers).
 *   This function **mutates the input array** and also returns the sorted array.
 *
 * @param {number} low
 *   The starting index of the sort range (default: 0).
 *
 * @param {number | undefined} high
 *   The ending index of the sort range (default: array length - 1).
 *
 * @returns {Array<number>}
 *   The same array reference, now sorted in ascending order.
 *
 * @example
 * ```js
 * const arr = [5, 2, 9, 1, 5, 6];
 * quickSort(arr);
 * console.log(arr);
 * // Output: [1, 2, 5, 5, 6, 9]
 * ```
 */
function quickSort(
  arr: Array<number>,
  low: number = 0,
  high: number | undefined = undefined,
): Array<number> {
  const { n, array } = validateAndReturnLength(arr);

  if (high === undefined) {
    high = n - 1;
  }

  if (low < high) {
    const pivot_index = partition(array, low, high);
    quickSort(array, low, pivot_index - 1);
    quickSort(array, pivot_index + 1, high);
  }

  return array;
}

const testArray = generateArray();
runWithTiming("Quick Sort Algorithm", quickSort, testArray);
