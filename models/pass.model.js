import { Schema, model } from "mongoose";

const passSchema = new Schema({
  tempPassword: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

export const Pass = model("Pass", passSchema);
