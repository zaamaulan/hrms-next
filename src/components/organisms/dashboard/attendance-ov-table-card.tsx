import { attendanceCollumns } from "@/components/molecules/attendance-table/attendance-columns";
import { AttendanceTable } from "@/components/molecules/attendance-table/attendance-table";
import { data } from "@/components/molecules/attendance-table/data";

export const AttedanceOVTableCard = () => {
  return (
    <AttendanceTable
      data={data.slice(0, 7)}
      columns={attendanceCollumns}
      overview
    />
  );
};
