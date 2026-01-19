import { generateArray } from "../utils/generate-array";
import { runWithTiming } from "../utils/timer";

function selectionSort(arr: number[]): number[] {
  if (!arr || arr.length === 0) return arr;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Test data
const testArray = generateArray();

runWithTiming("Selection Sort Algorithm", selectionSort, [...testArray]);
