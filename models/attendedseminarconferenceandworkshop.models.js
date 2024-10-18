import { Schema, model } from "mongoose";

const AttendedSeminarConferenceAndWorkshopSchema = new Schema({
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

export const AttendedSeminarConferenceAndWorkshop = model(
  "AttendedSeminarConferenceAndWorkshop",
  AttendedSeminarConferenceAndWorkshopSchema
);

