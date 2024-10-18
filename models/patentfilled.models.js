import { Schema, model } from "mongoose";

const PatentFilledSchema = new Schema({
  Department: {
    type: String,
  },
  Name: {
    type: String,
  },
  Designation: {
    type: String,
  },
  TopicName: {
    type: String,
  },
  DateOfFilling: {
    type: Date,
  },
  Type: {
    type: String,
    enum: [Nation, International],
  },
});

export const PatentFilled = model("PatentFilled", PatentFilledSchema);

