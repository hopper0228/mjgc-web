/**
 * Google Sheets API v4 (public read-only via API key)
 *
 * 使用前請確認：
 * 1. Google Cloud Console 建立 API key，啟用 Google Sheets API
 * 2. 將表單回覆的 Google Sheets 設為「知道連結的人皆可檢視」
 * 3. 在 .env.local 填入以下環境變數：
 *    GOOGLE_SHEETS_API_KEY=...
 *    PERFORMANCE_SHEET_ID=...  (試算表網址中 /d/ 後面那段)
 *    ACTIVITY_SHEET_ID=...
 */

const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

export type SheetRow = Record<string, string>;

/**
 * 讀取指定 Sheet 的所有資料，第一列視為欄位名稱
 */
export async function fetchSheetRows(
  spreadsheetId: string,
  range = "A:Z"
): Promise<SheetRow[]> {
  if (!API_KEY || !spreadsheetId) return [];

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${range}?key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 60 } }); // 每 60 秒重新驗證

  if (!res.ok) return [];

  const json = await res.json();
  const rows: string[][] = json.values ?? [];
  if (rows.length < 2) return [];

  const [headers, ...dataRows] = rows;
  return dataRows.map((row) =>
    Object.fromEntries(headers.map((h, i) => [h, row[i] ?? ""]))
  );
}
