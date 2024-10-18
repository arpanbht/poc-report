import { Schema, model } from "mongoose";

const studentBookPublishedSchema = new Schema({
  Name: {
    type: String,
  },
  BookNameAlongWithISBNISSNnumber: {
    type: String,
  },
  BookPublishedName: {
    type: String,
  },
  BookChapterPublisherName: {
    type: String,
  },
});

export const StudentBookPublished = model(
  "StudentBookPublished",
  studentBookPublishedSchema
);


