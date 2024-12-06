"use client";

import {
  EditIcon,
  MoreIcon,
  TrashIcon,
  ViewIcon,
} from "@/components/atoms/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { capitalize, cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export type Employee = {
  id: string;
  employeeName: string;
  employeeId: string;
  designation: string;
  type: "REMOTE" | "OFFICE";
  status:
    | "CONTRACT"
    | "INTERN"
    | "PROBATION"
    | "TEMPORARY"
    | "PART_TIME"
    | "PERMANENT";
};

const statusClasses: Record<Employee["status"], string> = {
  CONTRACT: "bg-blue-400/10 text-blue-400",
  INTERN: "bg-green-400/10 text-green-400",
  PROBATION: "bg-yellow-400/10 text-yellow-400",
  TEMPORARY: "bg-red-400/10 text-red-400",
  PART_TIME: "bg-purple-400/10 text-purple-400",
  PERMANENT: "bg-gray-400/10 text-gray-400",
};

export const departmentCollumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "employeeId",
    header: "Employee ID",
  },
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Employee["status"] = row.getValue("status");

      return (
        <div
          className={cn("w-fit rounded-sm px-2 py-1", statusClasses[status])}
        >
          {capitalize(row.getValue("status"))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <ViewIcon /> View
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <EditIcon /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-destructive hover:!bg-destructive/15 hover:!text-destructive">
              <TrashIcon /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
