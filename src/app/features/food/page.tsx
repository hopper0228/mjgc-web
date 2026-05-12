import FeaturePageLayout from "@/modules/guitar-club/feature-page-layout";

export default function FoodPage() {
  return (
    <FeaturePageLayout
      icon="🍜"
      title="美食饗宴"
      subtitle="精心準備的豐盛佳餚，滿足你的味蕾"
    >
      {/* ===== 請在這裡填入美食相關內容 ===== */}
      <div className="mt-12 space-y-8">
        {/* 佔位區塊 - 可替換為實際內容 */}
        <div className="border border-dashed border-white/20 rounded-2xl p-12 text-center">
          <p className="text-gray-500 text-sm">菜單 / 餐飲介紹 內容待填入</p>
        </div>
      </div>
    </FeaturePageLayout>
  );
}
