import { model, models, Schema } from "mongoose";

export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planId?: number;
  password: string;
  creditBalance?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number, default: 1 },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models?.image || model("User", userSchema);
export default User;
