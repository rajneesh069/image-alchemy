import { Document, model, models, Schema } from "mongoose";

const imageSchema = new Schema({
  title: { type: "String", required: true },
  transformationType: { type: "String", required: true },
  publicId: { type: String, required: true },
  sceureUrl: { type: URL, required: true },
  width: { type: Number },
  innerHeight: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", imageSchema);

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  innerHeight?: number;
  config?: Record<string, any>;
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export default Image;
