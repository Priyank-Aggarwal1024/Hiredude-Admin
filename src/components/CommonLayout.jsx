import React from "react";
import Sidebar from "./Sidebar";

function CommonLayout({ children }) {
  return (
    <div className="h-screen overflow-y-hidden w-full grid grid-cols-[250px_1fr]">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto">{children}</div>
    </div>
  );
}

export default CommonLayout;
