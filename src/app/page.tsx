import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tasks } from "@/components/ui/tasks";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-4 md:p-16">
      <div className="flex items-center w-full">
        <div className="flex gap-2">
          <h1 className="font-bold lowercase font-mono">Ticked.it</h1>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2">
          <ThemeToggle />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full mt-4">
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
      </div>
    </div>
  );
}
