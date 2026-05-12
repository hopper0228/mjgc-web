import FeaturePageLayout from "@/modules/guitar-club/feature-page-layout";

export default function LotteryPage() {
  return (
    <FeaturePageLayout
      icon="🎁"
      title="驚喜抽獎"
      subtitle="豐富獎品等你來拿，人人有機會"
    >
      {/* ===== 請在這裡填入抽獎相關內容 ===== */}
      <div className="mt-12 space-y-8">
        {/* 佔位區塊 - 可替換為實際內容 */}
        <div className="border border-dashed border-white/20 rounded-2xl p-12 text-center">
          <p className="text-gray-500 text-sm">抽獎規則 / 獎品介紹 內容待填入</p>
        </div>
      </div>
    </FeaturePageLayout>
  );
}
