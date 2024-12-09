import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AttendanceChart } from "./attendance-chart";

const filterData = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "day",
    label: "Day",
  },
  {
    value: "week",
    label: "Week",
  },
  {
    value: "month",
    label: "Month",
  },
  {
    value: "year",
    label: "Year",
  },
];

export const AttendanceOVCard = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between p-5">
        <CardTitle className="text-lg font-semibold">
          Attendance Overview
        </CardTitle>
        <Select defaultValue="today">
          <SelectTrigger className="flex w-fit gap-x-2">
            <SelectValue placeholder="today" />
          </SelectTrigger>
          <SelectContent>
            {filterData.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <AttendanceChart />
      </CardContent>
    </Card>
  );
};
