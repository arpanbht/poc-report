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

router.post("/approve-event-cometition/:id", verifyUser, approveEventCompetition);

router.post("/approve-patent/:id", verifyUser, approvePatent);

router.post("/approve-project-proposal/:id", verifyUser, approveProjectProposal);

router.post("/approve-publication/:id", verifyUser, approvePublication);

router.post("/approve-workshop/:id", verifyUser, approveWorkshop);

// routes for rejecting event
router.post("/reject-conference/:id", verifyUser, rejectConference);

router.post("/reject-consultancy/:id", verifyUser, rejectConsultancy);

router.post("/reject-event-cometition/:id", verifyUser, rejectEventCompetition);

router.post("/reject-patent/:id", verifyUser, rejectPatent);

router.post("/reject-project-proposal/:id", verifyUser, rejectProjectProposal);

router.post("/reject-publication/:id", verifyUser, rejectPublication);

router.post("/reject-workshop/:id", verifyUser, rejectWorkshop);

export default router;
