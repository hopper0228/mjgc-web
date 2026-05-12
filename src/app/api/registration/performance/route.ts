import { NextRequest } from "next/server";
import { withApiHandler } from "@/utils/withApiHandler";
import { error, success } from "@/utils/apiResponse";
import { BUSINESS_STATUS_CODE } from "@/config/constants";
import clientPromise from "@/lib/mongodb";
import { v4 as uuidv4 } from "uuid";

const DB = "guitar_club";
const COLLECTION = "performance_registrations";

export const GET = withApiHandler(async () => {
  const client = await clientPromise;
  const db = client.db(DB);
  const list = await db
    .collection(COLLECTION)
    .find({})
    .sort({ createdAt: 1 })
    .toArray();
  return Response.json(success(list), { status: 200 });
});

export const POST = withApiHandler(async (request: NextRequest) => {
  const body = await request.json();
  const { name, contact, performanceType, songTitle, duration, notes } = body;

  if (!name || !contact || !performanceType || !songTitle) {
    return Response.json(
      error("姓名、聯絡方式、表演類型、曲目為必填", BUSINESS_STATUS_CODE.WARNING),
      { status: 400 }
    );
  }

  const doc: PerformanceRegistration = {
    id: uuidv4(),
    name,
    contact,
    performanceType,
    songTitle,
    duration: Number(duration) || 5,
    notes: notes || "",
    createdAt: Date.now(),
  };

  const client = await clientPromise;
  const db = client.db(DB);
  await db.collection(COLLECTION).insertOne(doc);
  return Response.json(success(doc), { status: 200 });
});
