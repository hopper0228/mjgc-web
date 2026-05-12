"use client";
import { useRouter } from "next/navigation";

interface FeaturePageLayoutProps {
  icon: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function FeaturePageLayout({
  icon,
  title,
  subtitle,
  children,
}: FeaturePageLayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-16 flex items-center px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回活動首頁
        </button>
        <span className="ml-4 text-gray-600 text-sm hidden sm:inline">
          第三屆沐榕回娘家
        </span>
      </div>

      {/* Hero */}
      <div className="pt-16">
        <div className="bg-gradient-to-b from-zinc-900 to-[#0a0a0f] px-4 py-20 text-center">
          <div className="text-7xl mb-6">{icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-24">{children}</div>
    </div>
  );
}
