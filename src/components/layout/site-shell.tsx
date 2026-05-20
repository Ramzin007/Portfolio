"use client";

import { useState } from "react";
import { CommandPalette } from "@/components/layout/command-palette";
import { Navbar } from "@/components/layout/navbar";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { ToastProvider } from "@/components/ui/toast";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <ToastProvider>
      <ScrollProgress />
      <Navbar onCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <CustomCursor />
      {children}
    </ToastProvider>
  );
}
