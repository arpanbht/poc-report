import { Schema , model } from "mongoose";

const TalksAndDistinguisedLectureSeriesSchema = new Schema({
  PersonalityNameAndOrganization: {
    type: String,
  },
  Date: {
    type: Date,
  },
  Topic: {
    type: String,
  },
  AttendedBy: {
    type: [Schema.Types.ObjectId],
    ref: "Faculty",
  },
});

export const TalksAndDistinguisedLectureSeries = model(
  "TalksAndDistinguisedLectureSeries",
  TalksAndDistinguisedLectureSeriesSchema
);

