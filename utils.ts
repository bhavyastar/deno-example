const tasksFile = "tasks.json";

export function getTasks(): string[] {
  try {
    const data = Deno.readFileSync(tasksFile);
    return JSON.parse(new TextDecoder().decode(data));
  } catch {
    return [];
  }
}

export function addTask(task: string): void {
  const tasks = getTasks();
  tasks.push(task);
  Deno.writeFileSync(tasksFile, new TextEncoder().encode(JSON.stringify(tasks)));
}

export function removeTask(index: number): void {
  const tasks = getTasks();
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    Deno.writeFileSync(tasksFile, new TextEncoder().encode(JSON.stringify(tasks)));
  }
}
