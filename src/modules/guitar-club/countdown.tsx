"use client";
import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-08-22T11:30:00+08:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    setIsMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: "天" },
    { value: time.hours, label: "時" },
    { value: time.minutes, label: "分" },
    { value: time.seconds, label: "秒" },
  ];

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-mono font-bold text-amber-400 bg-white/10 rounded-xl px-4 py-3 min-w-[72px] text-center">
              {isMounted ? String(value).padStart(2, "0") : "--"}
            </div>
            <div className="text-xs text-gray-400 mt-2 tracking-widest">{label}</div>
          </div>
          {i < 3 && (
            <span className="text-amber-400 text-3xl font-bold -mt-5">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
