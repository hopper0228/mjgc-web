"use client";
import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-08-22T12:30:00+08:00");

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
            {/* 數字改為 text-amber-600，與主標題同色，背景改為配合方案一的樣式 */}
            <div className="text-3xl md:text-5xl font-mono font-bold text-amber-600 bg-white/50 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl px-4 py-3 min-w-[72px] text-center">
              {isMounted ? String(value).padStart(2, "0") : "--"}
            </div>
            {/* 標籤文字改為藏青色 (slate-800) */}
            <div className="text-xs text-slate-800 font-bold mt-2 tracking-widest drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              {label}
            </div>
          </div>
          {/* 分隔符號冒號改為藏青色 (slate-800) */}
          {i < 3 && (
            <span className="text-slate-800 text-3xl font-bold -mt-5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}