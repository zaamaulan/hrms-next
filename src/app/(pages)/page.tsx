import AttendanceOVChart from "@/components/organisms/dashboard/attendance-ov-chart";
import { AttendanceOVTable } from "@/components/organisms/dashboard/attendance-ov-table/attendance-ov-table";
import { DashboardSummary } from "@/components/organisms/dashboard/dashboard-summary";
import { Layout } from "@/components/templates/layout";
import React from "react";
import { data } from "@/components/organisms/dashboard/attendance-ov-table/data";
import { attendanceCollumns } from "@/components/organisms/dashboard/attendance-ov-table/attendance-ov-columns";

const DashboardPage = () => {
  return (
    <Layout
      title="Hello Robert 👋🏻"
      description="Good Morning"
      className="grid grid-cols-[1fr_.5fr] gap-5"
    >
      <div className="flex flex-col gap-y-5">
        <DashboardSummary />
        <AttendanceOVChart />
      </div>
      <AttendanceOVTable
        className="col-span-2"
        data={data.slice(0, 5)}
        columns={attendanceCollumns}
      />
    </Layout>
  );
};

export default DashboardPage;
