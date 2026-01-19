import { generateArray } from "../utils/generate-array";
import { runWithTiming } from "../utils/timer";

function bubbleSort(arr: number[]): number[] {
  if (!arr || arr.length === 0) return arr;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

const testArray = generateArray();
runWithTiming("Bubble Sort Algorithm", bubbleSort, [...testArray]);
