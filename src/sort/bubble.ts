import { generateArray } from "../utils/arr/generate-array";
import { validateAndReturnLength } from "../utils/arr/validate-worst.case";
import { runWithTiming } from "../utils/timer";

/**
 * Bubble Sort works by **repeatedly comparing adjacent elements**
 * and swapping them if they are in the wrong order. Each pass through
 * the array "bubbles" the largest unsorted element to its correct position
 * at the end of the array. The algorithm continues making passes until
 * no more swaps are needed, indicating the array is fully sorted.
 *
 * Time Complexity:
 * - Best Case (already sorted): O(n)
 * - Average / Worst Case: O(n²)
 * (because each element may need to be compared with every other element)
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
 * bubbleSort(arr);
 * console.log(arr);
 * // Output: [1, 2, 5, 5, 6, 9]
 * ```
 */
function bubbleSort(arr: Array<number>): Array<number> {
  const { n, array } = validateAndReturnLength(arr);

  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}

const testArray = generateArray();
runWithTiming("Bubble Sort Algorithm", bubbleSort, testArray);
