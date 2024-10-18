import { Schema, model } from "mongoose";

const CompetitionOrganizedSchema = new Schema({
  EventDate: {
    type: Date,
  },
  CompetitionType: {
    type: String,
  },
  CompetitionName: {
    type: String,
  },
});

export const CompetitionOrganized = model(
  "CometitionOrganized",
  CompetitionOrganizedSchema
);
