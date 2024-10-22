import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
  organizingInstitute: { type: String },
  name: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  isOrganized: { type: Boolean, default: false },
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

const Workshop = mongoose.model("Workshop", workshopSchema);

export default Workshop;
