"use client";

import { useData } from "./data-provider";
import { useEffect } from "react";

const STORAGE_KEY = "ticked.it/tasks";
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
  const { data, setData } = useData();

  const save = (data: any) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  const load = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(DEFAULT_DATA));

  useEffect(() => {
    const data = load();
    setData(data);
  }, []);

  useEffect(() => {
    save(data);
  }, [data]);

  return null;
};
