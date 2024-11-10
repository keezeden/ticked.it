import { Completed } from "@/components/ui/completed";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-full">Task</TableHead>
          <TableHead className="min-w-48">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <Completed />
      </TableBody>
    </Table>
  );
}
