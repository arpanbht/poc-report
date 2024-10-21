import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  name: { type: String },
  type: {
    type: String,
    enum: ["Book", "Journal", "Conference", "Book Chapter"],
  },
  paperName: { type: String },
  journalOrConferenceName: { type: String },
  volumeIssue: { type: String },
  pageNumbers: { type: String },
  doi: { type: String },
  monthYear: { type: Date },
  grade: {
    type: String,
    enum: ["Grade-A", "Grade-B", "Grade-C"],
  },
  isScopusOrUgcCare: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Publication = mongoose.model("Publication", publicationSchema);

export default Publication;
