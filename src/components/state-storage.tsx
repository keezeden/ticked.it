"use client";

import { useData } from "./data-provider";
import { useEffect } from "react";

const TASKS_STORAGE_KEY = "ticked.it/tasks";
const COMPLETED_STORAGE_KEY = "ticked.it/completed";

const DEFAULT_DATA: Task[] = [
  {
    id: 1,
    task: "Clean Room",
  },
  {
    id: 2,
    task: "Wash Dishes",
  },
  {
    id: 3,
    task: "Do Laundry",
  },
];

export const StateStorage = () => {
  const { tasks, setTasks, completed, setCompleted } = useData();

  const saveTasks = (data: any) => localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(data));
  const saveCompleted = (data: any) => localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(data));

  const loadTasks = () => JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) || JSON.stringify(DEFAULT_DATA));
  const loadCompleted = () => JSON.parse(localStorage.getItem(COMPLETED_STORAGE_KEY) || "[]");

  useEffect(() => {
    setTasks(loadTasks());
    setCompleted(loadCompleted());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    saveCompleted(completed);
  }, [completed]);

  return null;
};
