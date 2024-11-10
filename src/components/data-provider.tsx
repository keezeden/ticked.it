"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DataContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completed: Task[];
  setCompleted: React.Dispatch<React.SetStateAction<Task[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completed, setCompleted] = useState<Task[]>([]);

  return <DataContext.Provider value={{ tasks, setTasks, completed, setCompleted }}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context as DataContextType;
};
