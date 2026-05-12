import { MongoClient } from "mongodb";

const options = { maxPoolSize: 10 };

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 單例模式 — 延遲初始化，避免 build 期間 MONGODB_URI 未定義時拋出錯誤
function getClientPromise(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI environment variable is not defined");
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  return global._mongoClientPromise;
}

export default getClientPromise;
