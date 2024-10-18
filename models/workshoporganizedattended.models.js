import { Schema, model } from "mongoose";

const WorkShopOrganizedAttendedSchema = new Schema({
  Attended: {
    type: Schema.Types.ObjectId,
    ref: "AttendedSeminarConferenceAndWorkshop",
  },
  Organized: {
    type: Schema.Types.ObjectId,
    ref: "Organized",
  },
});

export const WorkShopOrganizedAttended = model(
  "WorkShopOrganizedAttended",
  WorkShopOrganizedAttendedSchema
);
