import { Schema, model } from "mongoose";

const IndustrialTourSchema = new Schema({
  OrganizedBy: {
    type: Schema.Types.ObjectId,
    ref: "Faculty",
  },
  Date: {
    type: Date,
  },
  IndustryName: {
    type: String,
  },
  AttendedBy: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
});

export const IndustrialTour = model("IndustrialTour", IndustrialTourSchema);


