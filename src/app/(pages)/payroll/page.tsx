import { data } from "@/components/organisms/payroll/payroll-list-table/data";
import { payrollCollumns } from "@/components/organisms/payroll/payroll-list-table/payroll-list-columns";
import { PayrollListTable } from "@/components/organisms/payroll/payroll-list-table/payroll-list-table";
import { Layout } from "@/components/templates/layout";
import React from "react";

const PayrollPage = () => {
  return (
    <Layout title="Payroll" description="All Employee Payroll">
      <PayrollListTable data={data} columns={payrollCollumns}/>
    </Layout>
  );
};

export default PayrollPage;
