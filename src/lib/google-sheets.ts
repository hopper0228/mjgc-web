/**
 * Google Sheets API v4 (Service Account 驗證)
 *
 * 使用前請確認：
 * 1. Google Cloud Console 建立 Service Account，啟用 Google Sheets API
 * 2. 下載 Service Account 的 JSON 金鑰
 * 3. 將試算表「共用」給 Service Account 的 email（檢視者即可）
 * 4. 在 .env.local 填入以下環境變數：
 *    GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@project-id.iam.gserviceaccount.com
 *    GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
 *    PERFORMANCE_FORM_SHEET_ID=...
 *    ACTIVITY_FORM_SHEET_ID=...
 */

import { google } from "googleapis";
import { unstable_noStore as noStore } from "next/cache";

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
}

export type SheetRow = Record<string, string>;

/**
 * 讀取指定試算表的所有資料，第一列視為欄位名稱
 */
export async function fetchSheetRows(
  spreadsheetId: string,
  range = "A:Z"
): Promise<SheetRow[]> {
  noStore();

  if (!spreadsheetId) return [];

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows: string[][] = res.data.values ?? [];
  if (rows.length < 2) return [];

  const [headers, ...dataRows] = rows;
  return dataRows.map((row) =>
    Object.fromEntries(headers.map((h, i) => [h, row[i] ?? ""]))
  );
}
