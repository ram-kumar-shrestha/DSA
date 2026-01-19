const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const srcPath = path.join(__dirname, "src");

// Get all folders in src directory
function getFolders() {
  return fs.readdirSync(srcPath).filter(
    (item) =>
      fs.statSync(path.join(srcPath, item)).isDirectory() &&
      !item.startsWith("utils"), // Exclude utils folder
  );
}

// Get all TS files in a folder
function getFiles(folder) {
  const folderPath = path.join(srcPath, folder);
  return fs.readdirSync(folderPath).filter((file) => file.endsWith(".ts"));
}

// Display menu
function displayMenu(items, title) {
  console.log(`\n${"=".repeat(50)}`);
  console.log(`  ${title}`);
  console.log(`${"=".repeat(50)}`);
  items.forEach((item, index) => {
    console.log(`  [${index + 1}] ${item}`);
  });
  console.log(`${"=".repeat(50)}\n`);
}

// Ask question
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

// Run the selected file
function runFile(folder, file) {
  const filePath = path.join(srcPath, folder, file);
  const { execSync } = require("child_process");

  console.log(`\n${"=".repeat(50)}`);
  console.log(`  Running: ${folder}/${file}`);
  console.log(`${"=".repeat(50)}\n`);

  try {
    const startTime = Date.now();

    // Use ts-node for .ts files, node for .js files
    const command = `npx ts-node "${filePath}"`;

    const output = execSync(command, { encoding: "utf-8" });
    const endTime = Date.now();
    const executionTime = endTime - startTime;

    console.log(output);
    console.log(`\n⏱️  Total Execution Time: ${executionTime}ms`);
  } catch (error) {
    console.log("❌ ERROR:", error.message);
  }
}

// Main function
async function main() {
  console.clear();
  console.log("\n🚀 DSA Practice Runner");

  while (true) {
    try {
      // Step 1: Select folder
      const folders = getFolders();
      displayMenu(folders, "📁 Select a Folder");
      const folderChoice = await ask('Enter folder number (or "q" to quit): ');

      if (folderChoice.toLowerCase() === "q") {
        console.log("\n👋 Goodbye!\n");
        rl.close();
        process.exit(0);
      }

      const folderIndex = parseInt(folderChoice) - 1;
      if (
        isNaN(folderIndex) ||
        folderIndex < 0 ||
        folderIndex >= folders.length
      ) {
        console.log("❌ Invalid choice. Please try again.");
        continue;
      }

      const selectedFolder = folders[folderIndex];

      // Step 2: Select file
      const files = getFiles(selectedFolder);
      if (files.length === 0) {
        console.log(`\n❌ No JavaScript files found in ${selectedFolder}\n`);
        continue;
      }

      displayMenu(files, `📄 Select a File from "${selectedFolder}"`);
      const fileChoice = await ask('Enter file number (or "b" to go back): ');

      if (fileChoice.toLowerCase() === "b") {
        continue;
      }

      const fileIndex = parseInt(fileChoice) - 1;
      if (isNaN(fileIndex) || fileIndex < 0 || fileIndex >= files.length) {
        console.log("❌ Invalid choice. Please try again.");
        continue;
      }

      const selectedFile = files[fileIndex];

      // Step 3: Run the file
      runFile(selectedFolder, selectedFile);

      // Ask if they want to continue
      console.log("\n");
      const continueChoice = await ask(
        'Press Enter to continue or "q" to quit: ',
      );
      if (continueChoice.toLowerCase() === "q") {
        console.log("\n👋 Goodbye!\n");
        rl.close();
        process.exit(0);
      }

      console.clear();
      console.log("\n🚀 DSA Practice Runner");
    } catch (error) {
      console.error("❌ An error occurred:", error.message);
    }
  }
}

// Run the main function
main();
