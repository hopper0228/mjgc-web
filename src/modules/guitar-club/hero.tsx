'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. 移除固定高度 h-[...], 讓高度由圖片自然撐開
        2. mt-16 確保整體推到導覽列下方
      */}
      <section className="relative w-full mt-16 bg-gray-900 flex items-center justify-center overflow-hidden">
        <div 
          className="relative w-full cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => setIsOpen(true)}
        >
          {/* 不使用 fill。設定 width 與 height 作為原始比例基準（例如 1920x1080），
            並透過 Tailwind 的 w-full h-auto 讓它在前端畫面完美隨視窗縮放。
          */}
          <Image
            src="/images/沐榕完稿.jpg"
            alt="沐榕回娘家"
            width={1920} // 請依據原圖的大致寬度填寫
            height={1080} // 請依據原圖的大致高度填寫
            priority
            className="w-full h-auto object-contain"
          />
          
          {/* 提示字條 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm pointer-events-none z-10">
            點擊圖片查看完整大圖
          </div>
        </div>
      </section>

      {/* 完整圖片查看功能 (Modal 燈箱) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 z-[110] p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            ✕
          </button>

          <div className="relative w-[95vw] h-[95vh]">
            <Image
              src="/images/沐榕完稿.jpg"
              alt="沐榕回娘家 完整圖"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}