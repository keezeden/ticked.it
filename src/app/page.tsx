import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tasks } from "@/components/ui/tasks";

export default function Home() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-full">Task</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <Tasks />
      </TableBody>
    </Table>
  );
}
