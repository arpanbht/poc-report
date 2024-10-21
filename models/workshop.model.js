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
});

const Workshop = mongoose.model("Workshop", workshopSchema);

export default Workshop;
