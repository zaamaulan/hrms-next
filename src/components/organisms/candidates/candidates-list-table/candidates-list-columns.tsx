"use client";

// import {
//   EditIcon,
//   MoreIcon,
//   TrashIcon,
//   ViewIcon,
// } from "@/components/atoms/icon";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { capitalize, cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export type Candidate = {
  id: string;
  candidateName: string;
  appliedFor: string;
  appliedDate: string;
  email: string;
  mobileNumber: string;
  status: "SELECTED" | "IN_PROCESS" | "REJECTED";
};

const statusClasses: Record<Candidate["status"], string> = {
  SELECTED: "bg-green-400/10 text-green-400",
  IN_PROCESS: "bg-yellow-400/10 text-yellow-400",
  REJECTED: "bg-red-400/10 text-red-400",
};

export const candidateCollumns: ColumnDef<Candidate>[] = [
  {
    accessorKey: "candidateName",
    header: "Candidate Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2.5">
        <Avatar className="size-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>HR</AvatarFallback>
        </Avatar>
        <p className="">{row.getValue("candidateName")}</p>
      </div>
    ),
  },
  {
    accessorKey: "appliedFor",
    header: "Applied For",
  },
  {
    accessorKey: "appliedDate",
    header: "Applied Date",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobileNumber",
    header: "Mobile Number",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Candidate["status"] = row.getValue("status");

      return (
        <div
          className={cn("w-fit rounded-sm px-2 py-1", statusClasses[status])}
        >
          {capitalize(row.getValue("status"))}
        </div>
      );
    },
  },
  // {
  //   id: "actions",
  //   cell: () => {
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuItem className="cursor-pointer">
  //             <ViewIcon /> View
  //           </DropdownMenuItem>
  //           <DropdownMenuItem className="cursor-pointer">
  //             <EditIcon /> Edit
  //           </DropdownMenuItem>
  //           <DropdownMenuItem className="cursor-pointer text-destructive hover:!bg-destructive/15 hover:!text-destructive">
  //             <TrashIcon /> Delete
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
