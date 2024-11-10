"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DataContextType {
  data: Task[];
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Task[]>([]);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context as DataContextType;
};
