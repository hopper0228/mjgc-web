import Image from "next/image";
import Countdown from "./countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://static.readdy.ai/image/abc124db86a99a040d4212ba1ee4392b/623eeeea97d6d33bc8c88708f880985e.jpeg"
          alt="活動背景"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <p className="text-amber-400 tracking-[0.3em] text-xs uppercase mb-6">
          2026年8月22日（星期六）· 典空間 活動會場
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
          第三屆
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10 text-amber-400">
          沐榕回娘家
        </h1>

        <p className="text-gray-400 text-sm tracking-widest mb-6">距離活動開始</p>
        <Countdown />

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#forms"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            立即報名
          </a>
          <a
            href="#about"
            className="border border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 px-8 py-3 rounded-lg transition-all duration-200"
          >
            向下探索 ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
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
