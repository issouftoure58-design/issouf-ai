"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumeric) {
      if (!isNumeric) setDisplay(value);
      return;
    }

    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * numericValue);
      setDisplay(String(val));

      if (current >= steps) {
        setDisplay(String(numericValue));
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, isNumeric, value]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
