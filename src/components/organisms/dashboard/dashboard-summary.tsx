import { Arrow, EmployeeStroke } from "@/components/atoms/icons";
import { SummaryCard } from "@/components/atoms/summary-card";

export const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <SummaryCard
        title="Total Employee"
        icon={<EmployeeStroke className="text-hrms-primary" />}
      >
        <p className="text-3xl font-bold leading-10">560</p>
        <div className="flex items-center rounded-[5px] bg-green-400/20 p-1 pr-2 text-emerald-400">
          <Arrow />
          <p className="text-sm">12%</p>
        </div>
      </SummaryCard>
      <SummaryCard
        title="Total Applicant"
        icon={<EmployeeStroke className="text-hrms-primary" />}
      >
        <p className="text-3xl font-bold leading-10">1050</p>
        <div className="flex items-center rounded-[5px] bg-green-400/20 p-1 pr-2 text-emerald-400">
          <Arrow />
          <p className="text-sm">5%</p>
        </div>
      </SummaryCard>
      <SummaryCard
        title="Today Attendance"
        icon={<EmployeeStroke className="text-hrms-primary" />}
      >
        <p className="text-3xl font-bold leading-10">470</p>
        <div className="flex items-center rounded-[5px] bg-red-400/20 p-1 pr-2 text-red-400">
          <Arrow className="rotate-180" />
          <p className="text-sm">8%</p>
        </div>
      </SummaryCard>
      <SummaryCard
        title="Total Projects"
        icon={<EmployeeStroke className="text-hrms-primary" />}
      >
        <p className="text-3xl font-bold leading-10">250</p>
        <div className="flex items-center rounded-[5px] bg-green-400/20 p-1 pr-2 text-emerald-400">
          <Arrow />
          <p className="text-sm">12%</p>
        </div>
      </SummaryCard>
    </div>
  );
};
