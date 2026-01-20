import { generateArray } from "../utils/arr/generate-array";
import { validateAndReturnLength } from "../utils/arr/validate-worst.case";
import { runWithTiming } from "../utils/timer";

/**
 * Selection Sort works by **dividing the array into sorted and unsorted portions**.
 * On each iteration, it finds the minimum element from the unsorted portion
 * and swaps it with the first element of the unsorted portion, effectively
 * expanding the sorted portion by one element. This continues until the entire
 * array is sorted.
 *
 * Time Complexity:
 * - Best / Average / Worst Case: O(n²)
 * (always performs the same number of comparisons regardless of input)
 *
 * Space Complexity: O(1) (in-place sort)
 *
 * @param {Array<number>} arr
 *   The array of numbers to sort (must be a valid array of numbers).
 *   This function **mutates the input array** and also returns the sorted array.
 *
 * @returns {Array<number>}
 *   The same array reference, now sorted in ascending order.
 *
 * @example
 * ```js
 * const arr = [5, 2, 9, 1, 5, 6];
 * selectionSort(arr);
 * console.log(arr);
 * // Output: [1, 2, 5, 5, 6, 9]
 * ```
 */
function selectionSort(arr: Array<number>): Array<number> {
  const { n, array } = validateAndReturnLength(arr);

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

const testArray = generateArray();
runWithTiming("Selection Sort Algorithm", selectionSort, testArray);
