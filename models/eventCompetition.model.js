import mongoose from "mongoose";

const eventCompetitionSchema = new mongoose.Schema({
  eventDate: { type: Date },
  competitionType: { type: String },
  competitionName: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const EventCompetition = mongoose.model(
  "EventCompetition",
  eventCompetitionSchema
);

export default EventCompetition;
