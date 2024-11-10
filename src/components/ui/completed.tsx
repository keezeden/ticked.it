"use client";
import { useData } from "../data-provider";
import { TableCell, TableRow } from "./table";
import { format } from "date-fns";

export const Completed = () => {
  const { completed } = useData();

  return completed.map((row) => (
    <TableRow key={row.id} id={row.id.toString()}>
      <TableCell className="font-medium">{row.task}</TableCell>
      <TableCell>{row.date ? getRelativeTime(row.date) : ""}</TableCell>
    </TableRow>
  ));
};

const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const result = format(date, "eee, do MMMM");
  return result;
};
