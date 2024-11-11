"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DataContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completed: Task[];
  setCompleted: React.Dispatch<React.SetStateAction<Task[]>>;
  sound: File | null;
  setSound: React.Dispatch<React.SetStateAction<File | null>>;
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completed, setCompleted] = useState<Task[]>([]);
  const [sound, setSound] = useState<File | null>(null);
  const [muted, setMuted] = useState<boolean>(false);

  return (
    <DataContext.Provider value={{ tasks, setTasks, completed, setCompleted, sound, setSound, muted, setMuted }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context as DataContextType;
};
