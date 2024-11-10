import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const placeholderTasks = [
  "Clean Room",
  "Wash Dishes",
  "Do Laundry",
  "Buy Groceries",
  "Walk Dog",
  "Read Book",
  "Cook Dinner",
  "Exercise",
  "Meditate",
  "Write Journal",
];

export function generatePlaceholderTaskText() {
  return placeholderTasks[Math.floor(Math.random() * placeholderTasks.length)];
}
