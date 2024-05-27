import { SteamVideoProvider } from "@/providers/StreamClientProvider";
import type { Metadata } from "next";
import React, { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Yoom - Enhance Communication",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SteamVideoProvider>{children}</SteamVideoProvider>
    </main>
  );
};

export default RootLayout;
