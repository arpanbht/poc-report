import mongoose from "mongoose";

const patentSchema = new mongoose.Schema({
  department: { type: String },
  name: { type: String },
  designation: { type: String },
  topicName: { type: String },
  dateOfFiling: { type: Date },
  type: { type: String, enum: ["National", "International"] },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  obtainedScore: {
    type: Number,
    default: 0,
  },
  hasContentAccess: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  department: {
    type: String,
  },
});

const Patent = mongoose.model("Patent", patentSchema);

export default Patent;
