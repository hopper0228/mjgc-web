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
    <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-2 md:gap-4">
          <div className="text-center flex flex-col items-center">
            {/* 數字區塊：配合深色主題，改為半透明微白背景 (bg-white/10)，數字使用亮琥珀色 (amber-400) */}
            <div className="text-4xl md:text-6xl font-mono font-bold text-amber-400 bg-white/10 border border-white/20 rounded-xl px-3 py-4 md:px-5 md:py-4 min-w-[72px] md:min-w-[96px] text-center shadow-lg">
              {isMounted ? String(value).padStart(2, "0") : "--"}
            </div>
            {/* 標籤區塊：移除模糊的陰影，改用淺灰色 (gray-400)，並稍微放大字體 */}
            <div className="text-sm md:text-base text-gray-400 font-medium mt-3 tracking-widest">
              {label}
            </div>
          </div>
          {/* 分隔符號：移除陰影，改為帶有透明度的白色 (white/30)，並調整對齊高度 */}
          {i < 3 && (
            <span className="text-white/30 text-4xl md:text-6xl font-bold -mt-8">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}