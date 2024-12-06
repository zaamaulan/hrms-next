import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";

interface PaginationButtonProps {
  table: Table<any>;
}

export const PaginationButton = ({ table }: PaginationButtonProps) => {
  return (
    <div className="inline-grid grid-cols-2 items-center justify-end space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
};
