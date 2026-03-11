import mongoose, { Schema, Document, Model } from "mongoose";

// ─── Contact Message ───────────────────────────────────────────────────────
export interface IContactMessage extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
  read: boolean;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ContactMessage: Model<IContactMessage> =
  mongoose.models.ContactMessage ||
  mongoose.model<IContactMessage>("ContactMessage", ContactMessageSchema);

// ─── Sermon ────────────────────────────────────────────────────────────────
export interface ISermon extends Document {
  title: string;
  titleAm: string;
  preacher: string;
  date: Date;
  youtubeUrl?: string;
  description: string;
  descriptionAm: string;
  scripture: string;
  createdAt: Date;
}

const SermonSchema = new Schema<ISermon>(
  {
    title: { type: String, required: true },
    titleAm: { type: String, required: true },
    preacher: { type: String, required: true },
    date: { type: Date, required: true },
    youtubeUrl: { type: String },
    description: { type: String, required: true },
    descriptionAm: { type: String, required: true },
    scripture: { type: String, required: true },
  },
  { timestamps: true }
);

export const Sermon: Model<ISermon> =
  mongoose.models.Sermon || mongoose.model<ISermon>("Sermon", SermonSchema);

// ─── Event ─────────────────────────────────────────────────────────────────
export interface IEvent extends Document {
  title: string;
  titleAm: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  descriptionAm: string;
  category: "worship" | "prayer" | "study" | "outreach" | "youth" | "other";
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    titleAm: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    descriptionAm: { type: String, required: true },
    category: {
      type: String,
      enum: ["worship", "prayer", "study", "outreach", "youth", "other"],
      default: "other",
    },
  },
  { timestamps: true }
);

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
