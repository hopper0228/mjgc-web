// src/modules/guitar-club/event-info.tsx
import Countdown from "./countdown";

export default function EventInfo() {
  return (
    <section className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-12 pb-16">
      
      <p className="text-amber-400 font-bold text-sm tracking-[0.2em] mb-8">
        距離活動開始
      </p>
      
      <Countdown />

      <div className="flex flex-wrap gap-5 justify-center mt-12">
        <a
          href="#forms"
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
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