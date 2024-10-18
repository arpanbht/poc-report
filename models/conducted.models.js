import { Schema, model } from "mongoose";

const ConductedSchema = new Schema({
  Date: {
    type: Date,
  },
  Department: {
    type: String,
  },
  Topic: {
    type: String,
  },
  ConductedBy: {
    type: [Schema.Types.ObjectId],
    ref: "Faculty",
  },
});

export const Conducted = model("Conducted", ConductedSchema);


