import { ChevronDown } from "lucide-react";
import React from "react";
import { Notification } from "../atoms/icons";
import { Search } from "../molecules/search";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopbarProps {
  title: string;
  description?: string;
  breadcrumbs?: React.ReactNode;
}

export const Topbar = ({ title, description }: TopbarProps) => {
  return (
    // pt-5 z-10 sticky top-0 -mt-10
    <header className="flex w-full items-center justify-between bg-white px-[1.875rem] py-3.5">
      <div>
        <p className="text-xl font-semibold text-hrms-dark">{title}</p>
        {description && (
          <p className="text-sm font-normal text-hrms-gray">{description}</p>
        )}
        {/* {breadcrumbs} */}
      </div>
      <div className="flex items-center gap-x-5">
        <Search placeholder="Search" />
        <Button size="icon" variant="ghost" className="bg-accent">
          <Notification />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="inline-flex items-center gap-x-2 rounded-[10px] border border-hrms-gray/25 p-1 hover:bg-hrms-gray/10"
            >
              <Avatar className="h-full rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-semibold text-hrms-dark">Robert Allen</p>
                <p className="text-xs font-normal text-hrms-gray">HR Manager</p>
              </div>
              <ChevronDown className="mx-2 size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-red-400">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
