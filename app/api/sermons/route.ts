import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Sermon } from "@/lib/models";

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      console.warn("DB not connected — returning empty sermons list.");
      return NextResponse.json({ sermons: [] });
    }

    const sermons = await Sermon.find().sort({ date: -1 }).limit(20).lean();
    const serializable = sermons.map((s: any) => ({
      ...s,
      _id: s._id?.toString(),
      date: s.date ? new Date(s.date).toISOString() : null,
    }));

    return NextResponse.json({ sermons: serializable });
  } catch (error) {
    console.error("GET sermons error:", error);
    return NextResponse.json({ sermons: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const sermon = await Sermon.create(body);
    return NextResponse.json({ success: true, sermon }, { status: 201 });
  } catch (error) {
    console.error("POST sermon error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
