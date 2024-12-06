import { data } from "@/components/organisms/employee/employees-list-table/data";
import { employeeCollumns } from "@/components/organisms/employee/employees-list-table/employees-list-columns";
import { EmployeesListTable } from "@/components/organisms/employee/employees-list-table/employees-list-table";
import { Layout } from "@/components/templates/layout";
import React from "react";

const EmployeePage = () => {
  return (
    <Layout title="All Employees" description="All Employee Information">
      <EmployeesListTable data={data} columns={employeeCollumns} />
    </Layout>
  );
};

export default EmployeePage;
