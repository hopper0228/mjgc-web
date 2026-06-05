// src/modules/guitar-club/event-info.tsx
import Countdown from "./countdown";

export default function EventInfo() {
  return (
    <section className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-12 pb-16">
      
      {/* 調整：放大字體 (text-lg md:text-xl)，改用 font-medium 減少過粗導致的模糊感，並加入 antialiased 強化邊緣平滑 */}
      <p className="text-amber-400 font-medium text-lg md:text-xl tracking-[0.25em] mb-10 antialiased">
        距離活動開始
      </p>
      
      <Countdown />

      <div className="flex flex-wrap gap-5 justify-center mt-12">
        {/* 調整：稍微放大按鈕與文字尺寸 (text-lg px-10 py-3.5)，並移除 shadow 發光效果，讓按鈕看起來更扎實乾淨 */}
        <a
          href="#forms"
          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-lg px-10 py-3.5 rounded-lg transition-all duration-200 hover:scale-105"
        >
          立即報名
        </a>
        {/* <a
          href="#about"
          className="border border-white/30 hover:border-amber-400/80 text-white hover:text-amber-400 font-bold px-8 py-3 rounded-lg transition-all duration-200"
        >
          向下探索 ↓
        </a> */}
      </div>
      
    </section>
  );
}