import Sidebar from "@/components/shared/SideBar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      {/* <MobileNav/> */}

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
