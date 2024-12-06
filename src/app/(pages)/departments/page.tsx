import { DepartmentGrid } from "@/components/organisms/department/department-grid";
import { Layout } from "@/components/templates/layout";
import React from "react";

const DepartmentPage = () => {
  return (
    <Layout title="All Departments" description="All Departments Information">
      <DepartmentGrid />
    </Layout>
  );
};

export default DepartmentPage;
