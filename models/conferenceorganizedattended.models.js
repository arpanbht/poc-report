import { Schema, model } from "mongoose";

const ConferenceOrganizedAttendedSchema = new Schema({
  Attended: {
    type: Schema.Types.ObjectId,
    ref: "AttendedSeminarConferenceAndWorkshop",
  },
  Organized: {
    type: Schema.Types.ObjectId,
    ref: "Organized",
  },
});

export const ConferenceOrganizedAttended = model(
  "ConferenceOrganizedAttended",
  ConferenceOrganizedAttendedSchema
);


