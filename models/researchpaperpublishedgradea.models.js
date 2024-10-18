import { Schema, model } from "mongoose";

const ReseachedPaperPublishedGradeASchema = new Schema({
  Name: {
    type: String,
  },
  NationalJournal: {
    type: [String],
  },
  InternationalJournal: {
    type: [String],
  },
  Description: {
    type: String,
  },
});

export const ReseachedPaperPublishedGradeA = model(
  "ReseachedPaperPublishedGradeA",
  ReseachedPaperPublishedGradeASchema
);


