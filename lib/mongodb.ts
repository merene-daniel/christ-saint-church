import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://danielmerene:dm0105@cluster0.nks6i.mongodb.net/christ-saints-church";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  // If no Mongo URI is provided or Mongo isn't reachable, return null instead
  if (!MONGODB_URI) {
    console.warn("No MONGODB_URI configured — skipping DB connection.");
    return null;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };
    try {
      cached.promise = mongoose.connect(MONGODB_URI, opts);
    } catch (err) {
      console.error("Failed to start mongoose.connect():", err);
      cached.promise = null;
      return null;
    }
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("connectToDatabase error:", e);
    return null;
  }

  return cached.conn;
}
