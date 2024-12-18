import { cn } from "@/lib/utils";
import React from "react";
import { Topbar } from "../organisms/topbar";

interface LayoutProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  breadcrumbs?: {
    label: string;
    href: string;
  }[]
}

export const Layout = ({
  children,
  className,
  title,
  description,
  breadcrumbs
}: LayoutProps) => {
  return (
    <div className={cn("flex-1 p-5 pl-0")}>
      <Topbar title={title} description={description} breadcrumbs={breadcrumbs}/>
      <main className={cn("p-[1.875rem]", className)}>{children}</main>
    </div>
  );
};
