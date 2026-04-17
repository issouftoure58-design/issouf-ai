"use client";

interface Props {
  value: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "" }: Props) {
  return (
    <span>
      {prefix}{value}{suffix}
    </span>
  );
}
