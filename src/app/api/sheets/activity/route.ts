import { fetchSheetRows } from "@/lib/google-sheets";
import { success } from "@/utils/apiResponse";

export const GET = async () => {
  const rows = await fetchSheetRows(
    process.env.ACTIVITY_SHEET_ID ?? ""
  );
  return Response.json(success(rows), { status: 200 });
};
