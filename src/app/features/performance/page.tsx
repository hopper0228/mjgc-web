import FeaturePageLayout from "@/modules/guitar-club/feature-page-layout";
import { fetchSheetRows, SheetRow } from "@/lib/google-sheets";

async function getPerformances(): Promise<SheetRow[]> {
  return fetchSheetRows(process.env.PERFORMANCE_SHEET_ID ?? "");
}

const isConfigured =
  !!process.env.GOOGLE_SHEETS_API_KEY && !!process.env.PERFORMANCE_SHEET_ID;

export default async function PerformancePage() {
  const rows = isConfigured ? await getPerformances() : [];
  const headers = rows.length > 0 ? Object.keys(rows[0]) : [];

  return (
    <FeaturePageLayout
      icon="🎸"
      title="精彩表演"
      subtitle="吉他社成員帶來的精彩演出，音樂串起回憶"
    >
      <div className="mt-12 space-y-8">
        {/* 報名入口提示 */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSemIBhEsD2KZJgWKKif-3HjMOnJNmxHbKj-8v9ditimUPT0vw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-amber-500/10 border border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-500/20 rounded-xl px-6 py-4 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎵</span>
            <div>
              <p className="text-white font-semibold text-sm">我要上台表演！</p>
              <p className="text-gray-400 text-xs">點此前往表演報名表單</p>
            </div>
          </div>
          <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
        </a>

        {/* 報名列表 */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-xl">
              已報名表演
              {rows.length > 0 && (
                <span className="ml-3 text-amber-400 text-base font-normal">
                  {rows.length} 組
                </span>
              )}
            </h3>
          </div>

          {!isConfigured ? (
            <div className="border border-dashed border-white/20 rounded-2xl p-12 text-center space-y-3">
              <p className="text-gray-400 text-sm font-medium">尚未設定 Google Sheets 連線</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                請在 .env.local 填入以下變數：<br />
                <code className="text-amber-400/70">GOOGLE_SHEETS_API_KEY</code>、
                <code className="text-amber-400/70">PERFORMANCE_SHEET_ID</code>
              </p>
            </div>
          ) : rows.length === 0 ? (
            <div className="border border-dashed border-white/20 rounded-2xl p-12 text-center">
              <p className="text-gray-500 text-sm">尚無報名資料，成為第一个報名者！</p>
            </div>
          ) : (
            <div className="space-y-3">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4"
                >
                  <span className="text-amber-400 font-mono text-sm w-6 pt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                    {headers.map((h) =>
                      row[h] ? (
                        <div key={h}>
                          <span className="text-gray-500 text-xs">{h}：</span>
                          <span className="text-gray-200 text-sm">{row[h]}</span>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </FeaturePageLayout>
  );
}
