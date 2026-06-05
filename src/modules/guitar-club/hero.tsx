import Image from "next/image";
import Countdown from "./countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#faf9f6]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/沐榕回娘家.jpg"
          alt="活動背景"
          fill
          className="object-cover" 
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <p className="text-[#6B4B30] font-bold tracking-[0.3em] text-xs uppercase mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          2026年8月22日（星期六）· 典空間 活動會場
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2 text-[#4A3219] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
          第三屆
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10 text-[#4A3219] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
          沐榕回娘家
        </h1>

        <p className="text-[#6B4B30] font-bold text-sm tracking-widest mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          距離活動開始
        </p>
        
        <Countdown />

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#forms"
            className="bg-[#4A3219] hover:bg-[#3A2612] text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
          >
            立即報名
          </a>
          <a
            href="#about"
            className="border-2 border-[#4A3219] bg-white/30 backdrop-blur-sm hover:bg-[#4A3219] text-[#4A3219] hover:text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 shadow-sm"
          >
            向下探索 ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#4A3219]/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}