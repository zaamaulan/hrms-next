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

export type Payroll = {
  id: string;
  employeeName: string;
  ctc: number;
  salaryPerMonth: number;
  deduction: number;
  status: "COMPLETED" | "PENDING";
};

const statusClasses: Record<Payroll["status"], string> = {
  COMPLETED: "bg-green-400/10 text-green-400",
  PENDING: "bg-yellow-400/10 text-yellow-400",
};

export const payrollCollumns: ColumnDef<Payroll>[] = [
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
    accessorKey: "ctc",
    header: "CTC",
    cell: ({ row }) => (
      <p>
        {Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
          maximumFractionDigits: 0,
        }).format(row.getValue("ctc"))}
      </p>
    ),
  },
  {
    accessorKey: "salaryPerMonth",
    header: "Salary Per Month",
    cell: ({ row }) => (
      <p>
        {Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
          maximumFractionDigits: 0,
        }).format(row.getValue("salaryPerMonth"))}
      </p>
    ),
  },
  {
    accessorKey: "deduction",
    header: "Deduction",
    cell: ({ row }) => (
      <p>
        {Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
          maximumFractionDigits: 0,
        }).format(row.getValue("deduction"))}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Payroll["status"] = row.getValue("status");

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
