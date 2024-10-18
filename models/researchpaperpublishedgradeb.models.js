import { Schema, model } from "mongoose";

const ReseachedPaperPublishedGradeBSchema = new Schema({
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

export const ReseachedPaperPublishedGradeB = model(
  "ReseachedPaperPublishedGradeB",
  ReseachedPaperPublishedGradeBSchema
);

