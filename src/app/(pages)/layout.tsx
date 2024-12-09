import { Sidebar } from "@/components/organisms/sidebar";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
};

export default PagesLayout;
