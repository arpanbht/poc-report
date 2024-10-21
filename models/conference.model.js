import mongoose from "mongoose";

const conferenceSchema = new mongoose.Schema({
  organizingInstitute: { type: String },
  topicName: { type: String },
  date: { type: Date },
  attendedBy: { type: String },
  isOrganized: { type: Boolean, default: false }, // true for organized, false for attended
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Conference = mongoose.model("Conference", conferenceSchema);

export default Conference;
