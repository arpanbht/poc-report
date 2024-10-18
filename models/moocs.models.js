import { Schema, model } from "mongoose";

const MoocsSchema = new Schema({
  NameOfFaculty: {
    type: String,
  },
  NameOfTheModule: {
    type: String,
  },
  PlatformUsed: {
    type: String,
  },
  DateOfLaunching: {
    type: Date,
  },
  DocumentLink: {
    type: String,
  },
  Econtent: {
    type: String,
  },
  LinkOfVideoAndMedia: {
    type: String,
  },
});

export const Moocs = model("Moocs", MoocsSchema);

