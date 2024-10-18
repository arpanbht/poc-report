import { Schema, model } from "mongoose";

const StudentChapterActivitySchema = new Schema({
  FacultyName: {
    type: String,
  },
  CompanyName: {
    type: String,
  },
  OrderAmount: {
    type: Number,
  },
  OrderReceivedDate: {
    type: Date,
  },
  Status: {
    type: String,
    enum: ["Ongoing", "Completed"],
  },
});

export const StudentChapterActivity = model(
  "StudentChapterActivity",
  StudentChapterActivitySchema
);


