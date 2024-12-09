import { AttedanceTableCard } from "@/components/organisms/attendance-table-card";
import { Layout } from "@/components/templates/layout";

const AttedancePage = () => {
  return (
    <Layout title="Attendance" description="All Employee Attendance">
      <AttedanceTableCard />
    </Layout>
  );
};

export default AttedancePage;
