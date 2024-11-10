"use client";
import { useEffect, useState } from "react";
import { useData } from "../data-provider";
import { CheckButton } from "./check-button";
import { TableCell, TableRow } from "./table";
import { Button } from "./button";
import { Plus } from "lucide-react";
import { Input } from "./input";
import { generatePlaceholderTaskText } from "@/lib/utils";

export const Tasks = () => {
  const { data, setData } = useData();

  const [newTask, setNewTask] = useState<string | null>();
  const [placeholder, setPlaceholder] = useState<string>();

  const [styleMap, setStyleMap] = useState<{ [x: number]: string }>({});

  useEffect(() => {
    const map = data.reduce((acc, row) => {
      acc[row.id as keyof typeof styleMap] = "opacity-100";
      return acc;
    }, {} as Record<number, string>);

    setStyleMap(map);

    if (!placeholder || placeholder === "") setPlaceholder(generatePlaceholderTaskText());
  }, [data]);

  const removeTask = (id: number) => {
    setStyleMap((prev) => ({ ...prev, [id]: "opacity-0" }));

    setTimeout(() => setData((prev) => prev.filter((row) => row.id !== id)), 1000);
  };

  const addTask = () => {
    setData((prev) => [...prev, { id: prev.length + 1, task: newTask || "" }]);

    setNewTask(null);
    setPlaceholder(generatePlaceholderTaskText());
  };

  const canAddTask = !!(newTask && newTask !== "");

  return (
    <>
      {data.map((row) => (
        <TableRow
          className={"transition-opacity duration-700 ease-in-out " + styleMap[row.id]}
          key={row.id}
          id={row.id.toString()}
        >
          <TableCell className="font-medium">{row.task}</TableCell>
          <TableCell>
            <CheckButton onClick={() => removeTask(row.id)} />
          </TableCell>
        </TableRow>
      ))}
      <TableRow className="hover:bg-inherit">
        <TableCell>
          <Input
            value={newTask ?? ""}
            onChange={(e) => setNewTask(e.target.value)}
            className="border-none focus:outline-none -ml-2"
            placeholder={placeholder}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
        </TableCell>
        <TableCell>
          <Button disabled={!canAddTask} variant="outline" size="icon" onClick={addTask}>
            <Plus />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};
