"use client";
import { useEffect, useState } from "react";

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const hasTouchScreen =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

      const sizeBased =
        typeof window !== "undefined" && window.innerWidth < 768;

      setIsMobile(hasTouchScreen || sizeBased);
    };

    checkIsMobile(); // roda ao montar
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};
