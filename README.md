# DSA Practice Workspace

An interactive environment for practicing Data Structures and Algorithms in TypeScript.

## 🚀 Quick Start

```bash
npm install
npm start
```

## 📋 How It Works

1. **Select a Folder**: Choose from available categories (sort, search, etc.)
2. **Select a File**: Pick the algorithm you want to run
3. **See Output**: View results with execution timing immediately

## 💡 Adding New Files

Create a TypeScript file with your algorithm and use the timing utility:

```typescript
import { runWithTiming } from "../utils/timer";

function myAlgorithm(arr: number[]): number[] {
  // your implementation here
  return result;
}

const testArray = generateArray();
runWithTiming("My Algorithm", myAlgorithm, [...testArray]);
```

### Timing Utilities

The `timer.ts` utility provides two functions:

- **`runWithTiming(label, fn, ...args)`** - Executes function and prints timing
- **`measureTime(fn, ...args)`** - Returns `{ result, time }` object

## 📁 File Structure

```
dsa/
├── src/
│   ├── utils/
│   │   └── timer.ts          # Reusable timing utilities
|   |   |__ generate-array.ts # generates random array
│   ├── sort/
│   │   ├── bubble.ts
│   │   └── selection.ts
│   └── (add more folders for different categories)
├── runner.js                  # Interactive CLI
├── package.json
└── tsconfig.json
|__ .gitignore
```

## ✨ Features

- ⚡ **TypeScript Support** - Type-safe algorithm implementations
- ⏱️ **Performance Tracking** - Automatic timing for algorithm execution
- 📊 **Dual Time Display** - Shows both algorithm time and total execution time
- 📂 **Organized Structure** - Easy folder/file navigation
- 🔄 **Hot Reload Ready** - Supports `.ts` files but could be easily made compatible for `.js` also by changing `runner.js`
- 🎯 **Simple Testing** - Just add test data in your files

## 🎯 Example Output

```
🚀 DSA Practice Runner

==================================================
  📁 Select a Folder
==================================================
  [1] sort
==================================================

Enter folder number (or "q" to quit): 1

==================================================
  📄 Select a File from "sort"
==================================================
  [1] bubble.ts
  [2] selection.ts
==================================================

Enter file number (or "b" to go back): 1

==================================================
  Running: sort/bubble.ts
==================================================

Bubble Sort Algorithm Input: [
  [
      8, 938, 559, 280,
    417, 760, 339, 447,
    687, 977
  ]
]
Bubble Sort Algorithm Output: [
    8, 280, 339, 417,
  447, 559, 687, 760,
  938, 977
]
Bubble Sort Algorithm Time: 0.0565ms


⏱️  Total Execution Time: 1305ms


Press Enter to continue or "q" to quit:
```

Enjoy practicing DSA! 🚀
