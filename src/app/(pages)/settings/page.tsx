import { Setting } from "@/components/organisms/setting";
import { Layout } from "@/components/templates/layout";
import React from "react";

const SettingPage = () => {
  return (
    <Layout title="Settings" description="All System Settings">
      <Setting />
    </Layout>
  );
};

export default SettingPage;
