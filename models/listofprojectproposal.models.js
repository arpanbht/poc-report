import { Schema, model } from "mongoose";

const listOfProjectProposalSchema = new Schema({
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

export const ListOfProjectProposal = model(
  "ListOfProjectProposal",
  listOfProjectProposalSchema
);
