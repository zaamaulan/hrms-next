import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

interface SummaryCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const SummaryCard = ({ children, title, icon }: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-x-2.5 p-4 pb-2.5">
        <Button variant="ghost" size="icon" className="bg-primary/5">
          {icon}
        </Button>
        <CardTitle className="!m-0 p-4 px-0 font-normal leading-[1.375rem] text-secondary-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between pb-2.5">
        {children}
      </CardContent>
      <Separator />
      <CardFooter className="px-4 py-2.5">
        <p className="text-xs font-light text-secondary">
          Update: July 16, 2023
        </p>
      </CardFooter>
    </Card>
  );
};
