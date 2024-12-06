import AttendanceOVChart from "@/components/organisms/dashboard/attendance-ov-chart";
import { AttendanceOVTable } from "@/components/organisms/dashboard/attendance-ov-table/attendance-ov-table";
import { DashboardSummary } from "@/components/organisms/dashboard/dashboard-summary";
import { Layout } from "@/components/templates/layout";
import React from "react";
import { data } from "@/components/organisms/dashboard/attendance-ov-table/data";
import { attendanceCollumns } from "@/components/organisms/dashboard/attendance-ov-table/attendance-ov-columns";
import { ScheduleCalendar } from "@/components/organisms/dashboard/schedule-calendar";

const DashboardPage = () => {
  return (
    <Layout title="Hello Robert 👋🏻" description="Good Morning" className="flex flex-col gap-5">
      <div className="grid grid-cols-[1fr_auto] gap-5 h-fit relative">
        <div className="flex flex-col gap-y-5 h-full flex-grow flex-1">
          <DashboardSummary />
          <AttendanceOVChart />
        </div>
        <ScheduleCalendar />
      </div>
      <AttendanceOVTable data={data.slice(0, 7)} columns={attendanceCollumns} />
    </Layout>
  );
};

export default DashboardPage;
