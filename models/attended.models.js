import { Schema, model } from "mongoose";

const attendedSchema = new Schema({
  OrganizedBy: {
    type: String,
  },
  Date: {
    type: Date,
  },
  Topic: {
    type: String,
  },
  AttendedBy: {
    type: String,
  },
  Department: {
    type: String,
  },
});

export const Attended = model("Attended", attendedSchema);


