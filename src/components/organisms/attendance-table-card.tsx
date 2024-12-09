import { attendanceCollumns } from "@/components/molecules/attendance-table/attendance-columns";
import { AttendanceTable } from "@/components/molecules/attendance-table/attendance-table";
import { data } from "@/components/molecules/attendance-table/data";

export const AttedanceTableCard = () => {
  return <AttendanceTable data={data} columns={attendanceCollumns} />;
};
