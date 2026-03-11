import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Sermon } from "@/lib/models";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const sermon = await Sermon.findByIdAndUpdate(params.id, body, { new: true });
    if (!sermon) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true, sermon });
  } catch (error) {
    console.error("PUT sermon error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    await Sermon.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE sermon error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
