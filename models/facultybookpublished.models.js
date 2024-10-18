import { Schema, model } from "mongoose";

const FacultyBookPublishedSchema = new Schema({
  Name: {
    type: String,
  },
  BookName: {
    type: String,
  },
  BookPublisherName: {
    type: String,
  },
  BookChapterPublisherName: {
    type: String,
  },
});

export const FacultyBookPublished = model(
  "FacultyBookPublished",
  FacultyBookPublishedSchema
);


