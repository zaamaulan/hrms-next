import { departments } from "@/components/organisms/department/department-grid";
import { data } from "@/components/organisms/department/departments-list-table/data";
import { departmentCollumns } from "@/components/organisms/department/departments-list-table/departments-list-columns";
import { DepartmentsListTable } from "@/components/organisms/department/departments-list-table/departments-list-table";
import { Layout } from "@/components/templates/layout";
import React from "react";

const DepartmentDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const filteredData = departments.find((item) => item.id.toString() === id);
  const breadcrumbs = [
    { label: "All Departments", href: "/departments" },
    { label: filteredData?.label ?? "", href: `/departments/${id}` },
  ];

  return (
    <Layout title={filteredData?.label ?? ""} breadcrumbs={breadcrumbs}>
      <DepartmentsListTable data={data} columns={departmentCollumns} />
    </Layout>
  );
};

export default DepartmentDetailsPage;
