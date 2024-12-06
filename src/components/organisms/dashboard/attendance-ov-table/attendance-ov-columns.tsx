"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { capitalize, cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendance = {
  id: string;
  employeeName: string;
  designation: string;
  type: "REMOTE" | "OFFICE";
  checkIn: string;
  status: "LATE" | "ON TIME";
};

export const attendanceCollumns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "employeeName",
    header: "Employee Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2.5">
        <Avatar className="size-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>HR</AvatarFallback>
        </Avatar>
        <p className="">{row.getValue("employeeName")}</p>
      </div>
    ),
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <p>{capitalize(row.getValue("type"))}</p>,
  },
  {
    accessorKey: "checkIn",
    header: "Check In",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const statusClass =
        status === "LATE"
          ? "text-red-400 bg-red-400/10"
          : "text-emerald-400 bg-emerald-400/10";

      return (
        <div className={cn("w-fit rounded-sm px-2 py-1", statusClass)}>
          {capitalize(row.getValue("status"))}
        </div>
      );
    },
  },
];
