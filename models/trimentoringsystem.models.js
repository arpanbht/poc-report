import { Schema, model } from "mongoose";

const TriMentoringSystemSchema = new Schema({
  OrganizedBy: {
    type: String,
  },
  Date: {
    type: Date,
  },
  TakenBy: {
    type: String,
  },
  AttendedBy: {
    type: String,
  },
});

export const TriMentoringSystem = model(
  "TriMentoringSystem",
  TriMentoringSystemSchema
);

