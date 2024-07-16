import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/SideBar";
import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
}

export default Layout;
