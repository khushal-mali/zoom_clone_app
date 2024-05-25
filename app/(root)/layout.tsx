import { SteamVideoProvider } from "@/providers/StreamClientProvider";
import React, { type ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SteamVideoProvider>{children}</SteamVideoProvider>
    </main>
  );
};

export default RootLayout;
