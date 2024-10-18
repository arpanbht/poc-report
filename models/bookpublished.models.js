import { Schema } from "mongoose";

const BookPublishedSchema = new Schema({
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

export const BookPublished = Schema("BookPublished", BookPublishedSchema);

