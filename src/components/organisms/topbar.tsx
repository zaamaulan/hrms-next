import React from "react";
import { Search } from "../molecules/search";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown } from "lucide-react";
import { Notification } from "../atoms/icons";

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
        <div className="inline-flex items-center gap-x-2 rounded-[10px] border border-hrms-gray/25 p-1">
          <Avatar className="h-full rounded-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>HR</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-hrms-dark">Robert Allen</p>
            <p className="text-xs font-normal text-hrms-gray">HR Manager</p>
          </div>
          <ChevronDown className="mx-2 size-5" />
        </div>
      </div>
    </header>
  );
};
