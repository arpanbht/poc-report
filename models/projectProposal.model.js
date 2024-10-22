import mongoose from "mongoose";

const projectProposalSchema = new mongoose.Schema({
  title: { type: String },
  principalInvestigator: { type: String },
  coPrincipalInvestigator: { type: String },
  amountOfGrant: { type: Number },
  dateOfSubmission: { type: Date },
  dateOfGranting: { type: Date },
  status: {
    type: String,
    enum: ["Applied", "Under Review", "Granted"],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  obtainedScore: {
    type: Number,
    default: 0,
  },
  hasContentAccess: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  department: {
    type: String,
  },
});

const ProjectProposal = mongoose.model(
  "ProjectProposal",
  projectProposalSchema
);

export default ProjectProposal;
