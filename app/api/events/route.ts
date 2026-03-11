import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Event } from "@/lib/models";

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      console.warn("DB not connected — returning empty events list.");
      return NextResponse.json({ events: [] });
    }

    const events = await Event.find({ date: { $gte: new Date() } })
      .sort({ date: 1 })
      .limit(10)
      .lean();
    const serializable = events.map((e: any) => ({
      ...e,
      _id: e._id?.toString(),
      date: e.date ? new Date(e.date).toISOString() : null,
    }));
    return NextResponse.json({ events: serializable });
  } catch (error) {
    console.error("GET events error:", error);
    // Return empty array so client can fall back to sample data without receiving an error status
    return NextResponse.json({ events: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const event = await Event.create(body);
    return NextResponse.json({ success: true, event }, { status: 201 });
  } catch (error) {
    console.error("POST event error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
