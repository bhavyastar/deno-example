import { getTasks, addTask, removeTask } from "./utils.ts";

async function main() {
  while (true) {
    console.log("Commands:");
    console.log("1. View tasks");
    console.log("2. Add task");
    console.log("3. Remove task");
    console.log("4. Exit");

    const choice = await prompt("Enter your choice: ");
    switch (choice) {
      case "1":
        const tasks = getTasks();
        console.log("To-Do List:");
        tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
        break;

      case "2":
        const newTask = await prompt("Enter the new task: ");
        addTask(newTask);
        console.log("Task added successfully!");
        break;

      case "3":
        const taskIndexToRemove = parseInt(await prompt("Enter the task number to remove: ")) - 1;
        removeTask(taskIndexToRemove);
        console.log("Task removed successfully!");
        break;

      case "4":
        console.log("Goodbye!");
        Deno.exit(0);

      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

async function prompt(message: string): Promise<string> {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message));
  const n = <number>await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

main();
