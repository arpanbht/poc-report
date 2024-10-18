import { Schema, model } from "mongoose";

const FacultyDevelopmentProgramSchema = new Schema({
  Attended: {
    type: Schema.Types.ObjectId,
    ref: "Attended",
  },
  Conducted: {
    type: Schema.Types.ObjectId,
    ref: "Conducted",
  },
});

export const FacultyDevelopmentProgram = model(
  "FacultyDevelopmentProgram",
  FacultyDevelopmentProgramSchema
);

