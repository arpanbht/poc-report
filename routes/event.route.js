import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";

import {
  createConference,
  createConsultancy,
  createEventCompetition,
  createPatent,
  createProjectProposal,
  createPublication,
  createWorkshop,
} from "../controllers/event.controller.js";

import {
  approveConference,
  approveConsultancy,
  approveEventCompetition,
  approvePatent,
  approveProjectProposal,
  approvePublication,
  approveWorkshop,
} from "../controllers/event.controller.js";

import {
  rejectConference,
  rejectConsultancy,
  rejectEventCompetition,
  rejectPatent,
  rejectProjectProposal,
  rejectPublication,
  rejectWorkshop,
} from "../controllers/event.controller.js";

import {
  editConference,
  editConsultancy,
  editEventCompetition,
  editPatent,
  editProjectProposal,
  editPublication,
  editWorkshop,
} from "../controllers/event.controller.js";

const router = Router();

// routes for creating event
router.post("/create-conference", verifyUser, createConference);

router.post("/create-consultancy", verifyUser, createConsultancy);

router.post("/create-event-cometition", verifyUser, createEventCompetition);

router.post("/create-patent", verifyUser, createPatent);

router.post("/create-project-proposal", verifyUser, createProjectProposal);

router.post("/create-publication", verifyUser, createPublication);

router.post("/create-workshop", verifyUser, createWorkshop);

// routes for approving event
router.post("/approve-conference/:id", verifyUser, approveConference);

router.post("/approve-consultancy/:id", verifyUser, approveConsultancy);

router.post(
  "/approve-event-cometition/:id",
  verifyUser,
  approveEventCompetition
);

router.post("/approve-patent/:id", verifyUser, approvePatent);

router.post(
  "/approve-project-proposal/:id",
  verifyUser,
  approveProjectProposal
);

router.post("/approve-publication/:id", verifyUser, approvePublication);

router.post("/approve-workshop/:id", verifyUser, approveWorkshop);

// routes for rejecting event
router.delete("/reject-conference/:id", verifyUser, rejectConference);

router.delete("/reject-consultancy/:id", verifyUser, rejectConsultancy);

router.delete(
  "/reject-event-cometition/:id",
  verifyUser,
  rejectEventCompetition
);

router.delete("/reject-patent/:id", verifyUser, rejectPatent);

router.delete(
  "/reject-project-proposal/:id",
  verifyUser,
  rejectProjectProposal
);

router.delete("/reject-publication/:id", verifyUser, rejectPublication);

router.delete("/reject-workshop/:id", verifyUser, rejectWorkshop);

// routes for editing the events
router.put("/edit-project-proposal/:id", verifyUser, editProjectProposal);

router.put("/edit-publication/:id", verifyUser, editPublication);

router.put("/edit-conference/:id", verifyUser, editConference);

router.put("/edit-workshop/:id", verifyUser, editWorkshop);

router.put("/edit-patent/:id", verifyUser, editPatent);

router.put("/edit-consultancy/:id", verifyUser, editConsultancy);

router.put("/edit-event-competition/:id", verifyUser, editEventCompetition);

export default router;
