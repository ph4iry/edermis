import React, { ReactNode, createContext, useEffect, useState } from "react";

const ClientCtx = createContext(false);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <ClientCtx.Provider value={isClient}>{children}</ClientCtx.Provider>
  );
}