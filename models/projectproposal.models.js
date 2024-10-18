import { Schema } from "mongoose";

const ProjectProposalSchema = new Schema({
  TitleOfProjectInternalExternal: {
    type: String,
  },
  NameOfPrincipalInvestigator: {
    type: String,
  },
  NameOfCoPrincipalInvestigator: {
    type: String,
  },
  AmountOfGrant: {
    type: String,
  },
  DateOfSubmission: {
    type: Date,
  },
  DateOfGranting: {
    type: Date,
  },
  Status: {
    type: String,
  },
});

export const ProjectProposal = Schema(
  "ProjectProposal",
  ProjectProposalSchema
);

