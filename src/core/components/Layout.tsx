import type { PropsWithChildren } from "react";
import type { Config } from "../lib/config";
import Navbar from "./Navbar";

const Layout: React.FC<
  PropsWithChildren<{ config: Config; page?: string }>
> = ({ config, page, children }) => {
  return (
    <div className="m-4">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          maxWidth: "40rem",
          margin: "auto",
          width: "100%",
        }}
      >
        <div className="mb-14">
          <Navbar config={config.navbar} page={page} />
        </div>
        <main
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
