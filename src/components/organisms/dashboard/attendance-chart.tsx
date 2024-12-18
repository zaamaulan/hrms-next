"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const attendanceData = [
  {
    day: "Mon",
    attendance: 55.2,
    productivity: 80.4,
    absence: 15.4,
  },
  {
    day: "Tue",
    attendance: 62.1,
    productivity: 75.9,
    absence: 13.0,
  },
  {
    day: "Wed",
    attendance: 68.3,
    productivity: 71.2,
    absence: 11.5,
  },
  {
    day: "Thu",
    attendance: 72.5,
    productivity: 68.7,
    absence: 9.8,
  },
  {
    day: "Fri",
    attendance: 78.1,
    productivity: 64.2,
    absence: 8.7,
  },
  {
    day: "Sat",
    attendance: 82.4,
    productivity: 58.3,
    absence: 6.3,
  },
  {
    day: "Sun",
    attendance: 48.2,
    productivity: 52.1,
    absence: 4.7,
  },
];

const chartConfig = {
  attendance: {
    label: "Attendance",
    color: "#7152F3",
  },
  productivity: {
    label: "Productivity",
    color: "#FEB85B",
  },
  absence: {
    label: "Absence",
    color: "#F45B69",
  },
} satisfies ChartConfig;

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

export const AttendanceChart = () => {
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
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={attendanceData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="attendance"
              fill="var(--color-attendance)"
              radius={[5, 5, 2, 2]}
              barSize={22}
            />
            <Bar
              dataKey="productivity"
              fill="var(--color-productivity)"
              radius={[5, 5, 2, 2]}
              barSize={22}
            />
            <Bar
              dataKey="absence"
              fill="var(--color-absence)"
              radius={[5, 5, 2, 2]}
              barSize={22}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
