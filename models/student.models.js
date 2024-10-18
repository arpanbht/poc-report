import { Schema , model } from "mongoose";

const StudentSchema = new Schema({
  BookPublished: {
    type: Schema.Types.ObjectId,
    ref: "BookPublished",
  },
  ResearchPaperPublishedGradeA: {
    type: Schema.Types.ObjectId,
    ref: "ResearchPaperPublishedGradeA",
  },
  ResearchPaperPublishedGradeB: {
    type: Schema.Types.ObjectId,
    ref: "ResearchPaperPublishedGradeB",
  },
  ResearchPaperPublishedGradeC: {
    type: Schema.Types.ObjectId,
    ref: "ResearchPaperPublishedGradeC",
  },
});

export const Student = model("Student", StudentSchema);

