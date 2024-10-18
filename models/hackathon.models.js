import { Schema, model } from "mongoose";

const HackathonSchema = new Schema({
  Name: {
    Type: String,
  },
  Date: {
    type: Date,
  },
  Participants: {
    type: [Schema.Types.ObjectId],
    ref: "Student",
  },
});

export const Hackathon = model("Hackathon", HackathonSchema);
