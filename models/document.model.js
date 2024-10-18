import { Schema, model } from "mongoose";

const documentSchema = new Schema(
  {
    category: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    proofDocuments: { type: String }, // Google Drive link
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Document = model("Document", documentSchema);

