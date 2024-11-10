"use client";
import { History, Home } from "lucide-react";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export const RouteToggle = () => {
  const router = useRouter();
  const path = usePathname();

  const isHome = useMemo(() => path === "/", [path]);

  const onClick = () => {
    router.push(isHome ? "/history" : "/");
  };

  return (
    <Button onClick={onClick} variant="outline" size="icon">
      {isHome ? <History /> : <Home />}
    </Button>
  );
};
