"use client";

import { Separator } from "@/components/ui/separator";
import { ColumnDef } from "@tanstack/react-table";

export type Holiday = {
  date: string;
  day: string;
  holidayName: string;
};

// const statusClasses: Record<Payroll["status"], string> = {
//   COMPLETED: "bg-green-400/10 text-green-400",
//   PENDING: "bg-yellow-400/10 text-yellow-400",
// };

export const holidayCollumns: ColumnDef<Holiday>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="inline-grid grid-cols-[auto_1fr] gap-2">
        <Separator
          orientation="vertical"
          className="w-1 bg-primary"
        />
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "day",
    header: "Day",
  },
  {
    accessorKey: "holidayName",
    header: "Holiday Name",
  },
];
