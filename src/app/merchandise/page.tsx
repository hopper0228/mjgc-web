import FeaturePageLayout from "@/modules/guitar-club/feature-page-layout";

export default function MerchandisePage() {
  return (
    <FeaturePageLayout
      icon="🛍️"
      title="活動周邊"
      subtitle="精心設計的活動周邊商品，留下珍貴紀念"
    >
      {/* ===== 請在這裡填入周邊商品相關內容 ===== */}
      <div className="mt-12 space-y-8">
        {/* 佔位區塊 - 可替換為實際內容 */}
        <div className="border border-dashed border-white/20 rounded-2xl p-12 text-center">
          <p className="text-gray-500 text-sm">商品圖片 / 購買資訊 內容待填入</p>
        </div>
      </div>
    </FeaturePageLayout>
  );
}
