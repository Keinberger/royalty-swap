"use client";

import { useEffect, useState } from "react";
import compiledCircuit from "../config/compiled.json";
import { AxiomCircuitProvider } from "@axiom-crypto/react";

export default function AxiomProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <AxiomCircuitProvider compiledCircuit={compiledCircuit} provider={"http://localhost:8545"} chainId={"31337"}>
      {mounted && children}
    </AxiomCircuitProvider>
  );
}
