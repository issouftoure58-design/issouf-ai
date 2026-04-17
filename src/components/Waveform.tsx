"use client";

export function Waveform() {
  const bars = 24;

  return (
    <div className="flex items-center justify-center gap-[3px] h-12">
      {Array.from({ length: bars }).map((_, i) => {
        const height = Math.sin((i / bars) * Math.PI) * 70 + 10;
        return (
          <div
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-blue-500 to-violet-400 animate-pulse"
            style={{
              height: `${height}%`,
              animationDelay: `${i * 0.08}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        );
      })}
    </div>
  );
}
