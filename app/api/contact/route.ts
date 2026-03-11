import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactMessage } from "@/lib/models";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "ስም፣ ኢሜይል እና መልዕክት ያስፈልጋሉ" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newMessage = await ContactMessage.create({ name, email, phone, message });

    return NextResponse.json(
      { success: true, id: newMessage._id, message: "መልዕክትዎ ተቀብሏል!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "አስቸጋሪ ሁኔታ ተፈጥሯል። እንደገና ይሞክሩ።" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ messages });
  } catch (error) {
    console.error("GET contact error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
