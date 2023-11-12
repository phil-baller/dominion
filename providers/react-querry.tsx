"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querryClient = new QueryClient();

const ReactQuerry = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={querryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQuerry;
