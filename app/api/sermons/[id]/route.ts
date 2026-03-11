import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import { Sermon } from "@/lib/models";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    await connectToDatabase();
    const sermon = await Sermon.findByIdAndUpdate(id, body, { new: true });
    if (!sermon) return NextResponse.json({ error: "Not found" }, { status: 404 });
    revalidatePath("/sermons");
    return NextResponse.json({ success: true, sermon });
  } catch (error) {
    console.error("PUT sermon error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    await Sermon.findByIdAndDelete(id);
    revalidatePath("/sermons");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE sermon error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
