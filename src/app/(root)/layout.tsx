import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
