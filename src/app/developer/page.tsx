// src/app/developer/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center p-4">
      {/* 彩蛋卡片 */}
      <div className="max-w-md w-full bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center shadow-2xl animate-fade-in">
        
        {/* 個人照片 */}
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          <Image
            src="/images/me.jpeg"
            alt="曲珩 CHU HENG"
            fill
            className="object-cover"
          />
        </div>

        {/* 名字與職稱 */}
        <h1 className="text-2xl font-bold mb-2">曲珩 (CHU HENG)</h1>
        <p className="text-amber-400 text-sm tracking-widest mb-3">WEBSITE DEVELOPER</p>
        
        {/* 彩蛋留言 */}
        <p className="text-gray-300 text-sm italic mb-6">「哈哈我做的，現在單身中」</p>
        
        {/* 聯絡資訊區塊 */}
        <div className="space-y-4 text-gray-400 text-sm mb-8 bg-black/30 p-4 rounded-lg border border-white/5">
          <p className="flex justify-between items-center px-2">
            <span>Instagram</span>
            <a href="https://instagram.com/dt8.hopper0228" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
              @dt8.hopper0228
            </a>
          </p>
        </div>

        {/* 返回按鈕 */}
        <Link 
          href="/"
          className="inline-block border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-8 py-2.5 rounded-lg transition-all duration-200 text-sm tracking-wider"
        >
          ← 返回活動主頁
        </Link>

      </div>
    </div>
  );
}