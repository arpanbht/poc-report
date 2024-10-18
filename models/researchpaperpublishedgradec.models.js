import { Schema, model } from "mongoose";

const ReseachedPaperPublishedGradeCSchema = new Schema({
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

export const ReseachedPaperPublishedGradeC = model(
  "ReseachedPaperPublishedGradeC",
  ReseachedPaperPublishedGradeCSchema
);

