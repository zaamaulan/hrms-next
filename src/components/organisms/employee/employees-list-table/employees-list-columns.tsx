"use client";

import {
  EditIcon,
  MoreIcon,
  TrashIcon,
  ViewIcon,
} from "@/components/atoms/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { capitalize, cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
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

export const employeeCollumns: ColumnDef<Employee>[] = [
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
    accessorKey: "employeeId",
    header: "Employee ID",
  },
  {
    accessorKey: "department",
    header: "Department",
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
      const status: string = row.getValue("status");
      const statusClass =
        status === "PERMANENT"
          ? "text-primary bg-primary/10"
          : "text-emerald-400 bg-emerald-400/10";

      return (
        <div className={cn("w-fit rounded-sm px-2 py-1", statusClass)}>
          {capitalize(row.getValue("status"))}
        </div>
      );
    },
  },
  // {
  //   id: "actions",
  //   // header: () => <p className="text-center">Actions</p>,
  //   cell: () => (
  //     <div className="flex items-center justify-center gap-x-4 w-fit">
  //       <Button size="icon" variant="ghost" className="p-0 size-fit">
  //       <ViewIcon />

  //       </Button>
  //       <Button size="icon" variant="ghost" className="p-0 size-fit">
  //       <EditIcon />

  //       </Button>
  //       <Button size="icon" variant="ghost" className="p-0 size-fit">
  //       <TrashIcon />

  //       </Button>
  //     </div>
  //   ),
  // }, {
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

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
