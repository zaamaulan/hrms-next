import { AttendanceChart } from "@/components/organisms/dashboard/attendance-chart";
import { AttedanceOVTableCard } from "@/components/organisms/dashboard/attendance-ov-table-card";
import { DashboardSummary } from "@/components/organisms/dashboard/dashboard-summary";
import { ScheduleCalendar } from "@/components/organisms/dashboard/schedule-calendar";
import { Layout } from "@/components/templates/layout";

const DashboardPage = () => {
  return (
    <Layout
      title="Hello Robert 👋🏻"
      description="Good Morning"
      className="flex flex-col gap-5"
    >
      <div className="relative grid h-fit grid-cols-[1fr_auto] gap-5">
        <div className="flex h-full flex-1 flex-grow flex-col gap-y-5">
          <DashboardSummary />
          <AttendanceChart />
        </div>
        <ScheduleCalendar />
      </div>
      <AttedanceOVTableCard />
    </Layout>
  );
};

export default DashboardPage;
