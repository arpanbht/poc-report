import { Schema , model } from "mongoose";

const FacultySchema = new Schema({
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

export const Faculty = model("Faculty", FacultySchema);

