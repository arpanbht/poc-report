import { Schema , model } from "mongoose";

const SeminarOrganizedAttendedSchema = new Schema({
  Attended: {
    type: Schema.Types.ObjectId,
    ref: "AttendedSeminarConferenceAndWorkshop",
  },
  Organized: {
    type: Schema.Types.ObjectId,
    ref: "Organized",
  },
});

export const SeminarOrganizedAttended = model(
  "SeminarOrganizedAttended",
  SeminarOrganizedAttendedSchema
);

