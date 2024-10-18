import mongoose, { Schema } from "mongoose";

const OrganizedSchema = new Schema({
  OrganizingInstitution: {
    type: String,
  },
  Topic: {
    type: String,
  },
  Date: {
    type: Date,
  },
  AttendedBy: {
    type: String,
  },
});

export const Organized = mongoose.model("Organized", OrganizedSchema);
