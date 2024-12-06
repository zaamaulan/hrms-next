"use client";

import { Calendar01 } from "@/components/atoms/icons";
import { ScheduleList } from "@/components/molecules/schedule-list";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { DateRange } from "react-day-picker";

export const ScheduleCalendar = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <Card className="relative h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5">
        <CardTitle className="text-lg font-semibold text-secondary-foreground">
          My Schedule
        </CardTitle>
        <Button variant="ghost" size="icon" className="bg-primary/5">
          <Calendar01 />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
        />
        <Separator />
        <ScheduleList />
      </CardContent>
    </Card>
  );
};
