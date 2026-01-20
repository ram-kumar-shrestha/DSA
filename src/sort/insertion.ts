import { generateArray } from "../utils/arr/generate-array";
import { validateAndReturnLength } from "../utils/arr/validate-worst.case";
import { runWithTiming } from "../utils/timer";

/**
 * Insertion Sort works by **incrementally building a sorted portion**
 * of the array. On each iteration, it takes the next unsorted value,
 * shifts any larger values in the sorted portion to the right,
 * and inserts the current value into the correct position.
 * This is conceptually similar to sorting a hand of cards — you take
 * each new card and insert it into its proper place among the already
 * sorted cards.
 *
 * Time Complexity:
 * - Best Case (already sorted): O(n)
 * - Average / Worst Case: O(n²)
 * (because each insertion may require shifting up to i elements)
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
 * insertionSort(arr);
 * console.log(arr);
 * // Output: [1, 2, 5, 5, 6, 9]
 * ```
 */
function insertionSort(arr: Array<number>): Array<number> {
  const { n, array } = validateAndReturnLength(arr);

  for (let i = 1; i < n; i++) {
    let insertionIndex = i;
    const currentValue = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > currentValue) {
        array[j + 1] = array[j];
        insertionIndex = j;
      } else {
        break;
      }
    }
    array[insertionIndex] = currentValue;
  }

  return array;
}

const testArray = generateArray();
runWithTiming("Insertion Sort", insertionSort, testArray);
