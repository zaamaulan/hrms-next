import { candidateCollumns } from "@/components/organisms/candidates/candidates-list-table/candidates-list-columns";
import { CandidateListTable } from "@/components/organisms/candidates/candidates-list-table/candidates-list-table";
import { data } from "@/components/organisms/candidates/candidates-list-table/data";
import { Layout } from "@/components/templates/layout";
import React from "react";

const CandidatePage = () => {
  return (
    <Layout title="Candidates" description="Show All Candidates">
      <CandidateListTable data={data} columns={candidateCollumns} />
    </Layout>
  );
};

export default CandidatePage;
