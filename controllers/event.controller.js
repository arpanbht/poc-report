import ProjectProposal from "../models/projectProposal.model.js";
import Conference from "../models/conference.model.js";
import Consultancy from "../models/consultancy.model.js";
import EventCompetition from "../models/eventCompetition.model.js";
import Patent from "../models/patent.model.js";
import Publication from "../models/publication.model.js";
import Workshop from "../models/workshop.model.js";

import expressAsyncHandler from "express-async-handler";

// Create a new project proposal (unapproved by default)
export const createProjectProposal = expressAsyncHandler(async (req, res) => {
  const {
    title,
    principalInvestigator,
    coPrincipalInvestigator,
    amountOfGrant,
    dateOfSubmission,
    dateOfGranting,
    status,
  } = req.body;

  try {
    // Initialize the new project proposal with isApproved set to false
    const newProjectProposal = await ProjectProposal.create({
      title,
      principalInvestigator,
      coPrincipalInvestigator,
      amountOfGrant,
      dateOfSubmission,
      dateOfGranting,
      status,
      isApproved: false, // Unapproved by default
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
      department: req.user.department,
    });

    res.status(201).json(newProjectProposal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve the project proposal and save it in the database
export const approveProjectProposal = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    if (req.user.contentAccess === "edit") {
      // Update isApproved to true
      const approvedProjectProposal = await ProjectProposal.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true }
      );

      console.log(approvedProjectProposal);
      if (!approvedProjectProposal) {
        return res.status(404).json({ message: "Project proposal not found" });
      }

      await approvedProjectProposal.save();
      res.status(200).json({
        message: "Project proposal approved",
        data: approvedProjectProposal,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject (delete) a project proposal by ID
export const rejectProjectProposal = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;
  console.log(id);

  try {
    if (req.user.contentAccess === "edit") {
      const deletedProjectProposal = await ProjectProposal.findByIdAndDelete(
        id
      );

      if (!deletedProjectProposal) {
        return res.status(404).json({ message: "Project proposal not found" });
      }

      res.status(200).json({
        message: "Project proposal deleted successfully",
        data: deletedProjectProposal,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new publication (unapproved by default)
export const createPublication = expressAsyncHandler(async (req, res) => {
  const {
    name,
    type,
    paperName,
    journalOrConferenceName,
    volumeIssue,
    pageNumbers,
    doi,
    monthYear,
    grade,
    isScopusOrUgcCare,
  } = req.body;

  try {
    const newPublication = await Publication.create({
      name,
      type,
      paperName,
      journalOrConferenceName,
      volumeIssue,
      pageNumbers,
      doi,
      monthYear,
      grade,
      isScopusOrUgcCare,
      isApproved: false, // Unapproved by default
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
      department: req.user.department,
    });

    res.status(201).json(newPublication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve the publication and save it in the database
export const approvePublication = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const approvedPublication = await Publication.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true }
      );

      if (!approvedPublication) {
        return res.status(404).json({ message: "Publication not found" });
      }

      await approvedPublication.save();
      res
        .status(200)
        .json({ message: "Publication approved", data: approvedPublication });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject (delete) a publication by ID
export const rejectPublication = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const deletedPublication = await Publication.findByIdAndDelete(id);

      if (!deletedPublication) {
        return res.status(404).json({ message: "Publication not found" });
      }

      res.status(200).json({
        message: "Publication deleted successfully",
        data: deletedPublication,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new conference (unapproved by default)
export const createConference = expressAsyncHandler(async (req, res) => {
  const { organizingInstitute, topicName, date, attendedBy, isOrganized } =
    req.body;

  try {
    const newConference = await Conference.create({
      organizingInstitute,
      topicName,
      date,
      attendedBy,
      isOrganized,
      isApproved: false, // Unapproved by default
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
      department: req.user.department,
    });

    res.status(201).json(newConference);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve the conference and save it in the database
export const approveConference = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  console.log(id);

  try {
    if (req.user.contentAccess === "edit") {
      const approvedConference = await Conference.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true }
      );

      if (!approvedConference) {
        return res.status(404).json({ message: "Conference not found" });
      }

      await approvedConference.save();
      res
        .status(200)
        .json({ message: "Conference approved", data: approvedConference });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject (delete) a conference by ID
export const rejectConference = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const deletedConference = await Conference.findByIdAndDelete(id);

      if (!deletedConference) {
        return res.status(404).json({ message: "Conference not found" });
      }

      res.status(200).json({
        message: "Conference deleted successfully",
        data: deletedConference,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create a new workshop (unapproved by default)
export const createWorkshop = expressAsyncHandler(async (req, res) => {
  const { organizingInstitute, name, date, attendedBy, isOrganized } = req.body;

  try {
    const newWorkshop = await Workshop.create({
      organizingInstitute,
      name,
      date,
      attendedBy,
      isOrganized,
      isApproved: false, // Unapproved by default
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
      department: req.user.department,
    });

    res.status(201).json(newWorkshop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve the workshop and save it in the database
export const approveWorkshop = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const approvedWorkshop = await Workshop.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true }
      );

      if (!approvedWorkshop) {
        return res.status(404).json({ message: "Workshop not found" });
      }

      await approvedWorkshop.save();
      res
        .status(200)
        .json({ message: "Workshop approved", data: approvedWorkshop });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject (delete) a workshop by ID
export const rejectWorkshop = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const deletedWorkshop = await Workshop.findByIdAndDelete(id);

      if (!deletedWorkshop) {
        return res.status(404).json({ message: "Workshop not found" });
      }

      res.status(200).json({
        message: "Workshop deleted successfully",
        data: deletedWorkshop,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new patent (unapproved by default)
export const createPatent = expressAsyncHandler(async (req, res) => {
  const { department, name, designation, topicName, dateOfFiling, type } =
    req.body;

  try {
    const newPatent = await Patent.create({
      department,
      name,
      designation,
      topicName,
      dateOfFiling,
      type,
      isApproved: false, // Unapproved by default
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
      department: req.user.department,
    });

    res.status(201).json(newPatent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve the patent and save it in the database
export const approvePatent = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const approvedPatent = await Patent.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true }
      );

      if (!approvedPatent) {
        return res.status(404).json({ message: "Patent not found" });
      }

      await approvedPatent.save();
      res
        .status(200)
        .json({ message: "Patent approved", data: approvedPatent });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject (delete) a patent by ID
export const rejectPatent = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const deletedPatent = await Patent.findByIdAndDelete(id);

      if (!deletedPatent) {
        return res.status(404).json({ message: "Patent not found" });
      }

      res.status(200).json({
        message: "Patent deleted successfully",
        data: deletedPatent,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new consultancy (unapproved by default)
export const createConsultancy = expressAsyncHandler(async (req, res) => {
  const {
    orderNo,
    facultyName,
    companyName,
    orderAmount,
    orderReceiveDate,
    status,
  } = req.body;

  try {
    const newConsultancy = await Consultancy.create({
      orderNo,
      facultyName,
      companyName,
      orderAmount,
      orderReceiveDate,
      status,
      isApproved: false, // Unapproved by default
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
      department: req.user.department,
    });

    res.status(201).json(newConsultancy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve the consultancy and save it in the database
export const approveConsultancy = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const approvedConsultancy = await Consultancy.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true }
      );

      if (!approvedConsultancy) {
        return res.status(404).json({ message: "Consultancy not found" });
      }

      await approvedConsultancy.save();
      res
        .status(200)
        .json({ message: "Consultancy approved", data: approvedConsultancy });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reject (delete) a consultancy by ID
export const rejectConsultancy = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const deletedConsultancy = await Consultancy.findByIdAndDelete(id);

      if (!deletedConsultancy) {
        return res.status(404).json({ message: "Consultancy not found" });
      }

      res.status(200).json({
        message: "Consultancy deleted successfully",
        data: deletedConsultancy,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new event competition (unapproved by default)
export const createEventCompetition = expressAsyncHandler(async (req, res) => {
  const { eventDate, competitionType, competitionName } = req.body;

  try {
    // Initialize the event competition with isApproved set to false
    const newEventCompetition = await EventCompetition.create({
      eventDate,
      competitionType,
      competitionName,
      isApproved: false, // Default to unapproved
      createdBy: req.user._id,
      hasContentAccess: req.user._id,
    });

    // Return the competition entry without saving it to the database yet
    res.status(201).json({
      success: true,
      message: "Event competition created (pending approval)",
      data: newEventCompetition,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Approve the event competition and save it in the database
export const approveEventCompetition = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id; // ID of the competition to approve

  try {
    if (req.user.contentAccess === "edit") {
      // Find the event competition by ID and update isApproved to true
      const approvedEventCompetition = await EventCompetition.findByIdAndUpdate(
        id,
        { isApproved: true },
        { new: true } // Return the updated document
      );

      if (!approvedEventCompetition) {
        return res
          .status(404)
          .json({ success: false, message: "Event competition not found" });
      }

      // Save the approved event competition in the database
      await approvedEventCompetition.save();

      res.status(200).json({
        success: false,
        message: "Event competition approved and saved to the database",
        data: approvedEventCompetition,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Reject (delete) an event competition by ID
export const rejectEventCompetition = expressAsyncHandler(async (req, res) => {
  const id = req.params?.id;

  try {
    if (req.user.contentAccess === "edit") {
      const deletedEventCompetition = await EventCompetition.findByIdAndDelete(
        id
      );

      if (!deletedEventCompetition) {
        return res
          .status(404)
          .json({ success: false, message: "Event competition not found" });
      }

      res.status(200).json({
        message: "Event competition deleted successfully",
        data: deletedEventCompetition,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Edit a project proposal by ID
export const editProjectProposal = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedProjectProposal = await ProjectProposal.findByIdAndUpdate(
        id,
        req.body,
        { new: true } // Return the updated document
      );

      if (!updatedProjectProposal) {
        return res.status(404).json({ message: "Project proposal not found" });
      }

      res.status(200).json({
        message: "Project proposal updated successfully",
        data: updatedProjectProposal,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit a publication by ID
export const editPublication = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedPublication = await Publication.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!updatedPublication) {
        return res.status(404).json({ message: "Publication not found" });
      }

      res.status(200).json({
        message: "Publication updated successfully",
        data: updatedPublication,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit a conference by ID
export const editConference = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedConference = await Conference.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!updatedConference) {
        return res.status(404).json({ message: "Conference not found" });
      }

      res.status(200).json({
        message: "Conference updated successfully",
        data: updatedConference,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit a workshop by ID
export const editWorkshop = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedWorkshop = await Workshop.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedWorkshop) {
        return res.status(404).json({ message: "Workshop not found" });
      }

      res.status(200).json({
        message: "Workshop updated successfully",
        data: updatedWorkshop,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit a patent by ID
export const editPatent = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedPatent = await Patent.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedPatent) {
        return res.status(404).json({ message: "Patent not found" });
      }

      res.status(200).json({
        message: "Patent updated successfully",
        data: updatedPatent,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit a consultancy by ID
export const editConsultancy = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedConsultancy = await Consultancy.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!updatedConsultancy) {
        return res.status(404).json({ message: "Consultancy not found" });
      }

      res.status(200).json({
        message: "Consultancy updated successfully",
        data: updatedConsultancy,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit an event competition by ID
export const editEventCompetition = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.contentAccess === "edit") {
      const updatedEventCompetition = await EventCompetition.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!updatedEventCompetition) {
        return res.status(404).json({ message: "Event competition not found" });
      }

      res.status(200).json({
        message: "Event competition updated successfully",
        data: updatedEventCompetition,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Do not have permission",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get all Project Proposals
export const getAllProjectProposals = expressAsyncHandler(async (req, res) => {
  try {
    res.set("Content-Type", "application/json");
    res.set("Transfer-Encoding", "chunked");

    const cursor = await ProjectProposal.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching project proposals." });
  }
});

// get all Publications
export const getAllPublications = expressAsyncHandler(async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const cursor = await Publication.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching publications." });
  }
});

// get all Conferences
export const getAllConferences = expressAsyncHandler(async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const cursor = await Conference.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching conferences." });
  }
});

// get all Workshops
export const getAllWorkshops = expressAsyncHandler(async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const cursor = await Workshop.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching workshops." });
  }
});

// get all Patents
export const getAllPatents = expressAsyncHandler(async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const cursor = await Patent.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching patents." });
  }
});

// get all Consultancies
export const getAllConsultancies = expressAsyncHandler(async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const cursor = await Consultancy.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching consultancies." });
  }
});

// get all Event Competitions
export const getAllEventCompetitions = expressAsyncHandler(async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const cursor = await EventCompetition.find().cursor();
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching event competitions." });
  }
});

// Get all project proposals by user's contentAccess and department, and send data in chunks
export const getAllProjectProposalsByAccess = expressAsyncHandler(
  async (req, res) => {
    try {
      // Check if user has contentAccess: edit
      if (req.user.contentAccess !== "edit") {
        return res.status(403).json({
          success: false,
          error: "Forbidden: You do not have access to view this content.",
        });
      }

      // Fetch data only from the same department
      const cursor = await ProjectProposal.find({
        $or: [{ department: req.user.department }, { createdBy: req.user._id }],
      }).cursor();

      res.set("Content-Type", "application/json");
      res.set("Transfer-Encoding", "chunked");
      res.write("[");
      let first = true;

      cursor.on("data", (doc) => {
        if (!first) res.write(",");
        else first = false;
        res.write(JSON.stringify(doc));
      });

      cursor.on("end", () => {
        res.write("]");
        res.end();
      });

      cursor.on("error", (err) => {
        res
          .status(500)
          .json({ success: false, error: "Error while streaming data." });
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: "Error fetching project proposals." });
    }
  }
);

// Get all event competitions by user's contentAccess and department, and send data in chunks
export const getAllEventCompetitionsByAccess = expressAsyncHandler(
  async (req, res) => {
    try {
      // Check if user has contentAccess: edit
      if (req.user.contentAccess !== "edit") {
        return res.status(403).json({
          success: false,
          error: "Forbidden: You do not have access to view this content.",
        });
      }

      // Fetch data only from the same department
      const cursor = await EventCompetition.find({
        $or: [{ department: req.user.department }, { createdBy: req.user._id }],
      }).cursor();

      res.set("Content-Type", "application/json");
      res.set("Transfer-Encoding", "chunked");
      res.write("[");
      let first = true;

      cursor.on("data", (doc) => {
        if (!first) res.write(",");
        else first = false;
        res.write(JSON.stringify(doc));
      });

      cursor.on("end", () => {
        res.write("]");
        res.end();
      });

      cursor.on("error", (err) => {
        res.status(500).json({ error: "Error while streaming data." });
      });
    } catch (error) {
      res.status(500).json({ error: "Error fetching event competitions." });
    }
  }
);

// Get all conferences by user's contentAccess and department, and send data in chunks
export const getAllConferencesByAccess = expressAsyncHandler(
  async (req, res) => {
    try {
      // Check if user has contentAccess: edit
      if (req.user.contentAccess !== "edit") {
        return res.status(403).json({
          error: "Forbidden: You do not have access to view this content.",
        });
      }

      // Fetch data only from the same department
      const cursor = await Conference.find({
        $or: [{ department: req.user.department }, { createdBy: req.user._id }],
      }).cursor();

      res.set("Content-Type", "application/json");
      res.set("Transfer-Encoding", "chunked");
      res.write("[");
      let first = true;

      cursor.on("data", (doc) => {
        if (!first) res.write(",");
        else first = false;
        res.write(JSON.stringify(doc));
      });

      cursor.on("end", () => {
        res.write("]");
        res.end();
      });

      cursor.on("error", (err) => {
        res.status(500).json({ error: "Error while streaming data." });
      });
    } catch (error) {
      res.status(500).json({ error: "Error fetching conferences." });
    }
  }
);

// Get all consultancies by user's contentAccess and department, and send data in chunks
export const getAllConsultanciesByAccess = expressAsyncHandler(
  async (req, res) => {
    try {
      // Check if user has contentAccess: edit
      if (req.user.contentAccess !== "edit") {
        return res.status(403).json({
          error: "Forbidden: You do not have access to view this content.",
        });
      }

      // Fetch data only from the same department
      const cursor = await Consultancy.find({
        $or: [{ department: req.user.department }, { createdBy: req.user._id }],
      }).cursor();

      res.set("Content-Type", "application/json");
      res.set("Transfer-Encoding", "chunked");
      res.write("[");
      let first = true;

      cursor.on("data", (doc) => {
        if (!first) res.write(",");
        else first = false;
        res.write(JSON.stringify(doc));
      });

      cursor.on("end", () => {
        res.write("]");
        res.end();
      });

      cursor.on("error", (err) => {
        res.status(500).json({ error: "Error while streaming data." });
      });
    } catch (error) {
      res.status(500).json({ error: "Error fetching consultancies." });
    }
  }
);

// Get all patents by user's contentAccess and department, and send data in chunks
export const getAllPatentsByAccess = expressAsyncHandler(async (req, res) => {
  try {
    // Check if user has contentAccess: edit
    if (req.user.contentAccess !== "edit") {
      return res.status(403).json({
        error: "Forbidden: You do not have access to view this content.",
      });
    }

    // Fetch data only from the same department
    const cursor = await Patent.find({
      $or: [{ department: req.user.department }, { createdBy: req.user._id }],
    }).cursor();

    res.set("Content-Type", "application/json");
    res.set("Transfer-Encoding", "chunked");
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching patents." });
  }
});

// Get all publications by user's contentAccess and department, and send data in chunks
export const getAllPublicationsByAccess = expressAsyncHandler(
  async (req, res) => {
    try {
      // Check if user has contentAccess: edit
      if (req.user.contentAccess !== "edit") {
        return res.status(403).json({
          error: "Forbidden: You do not have access to view this content.",
        });
      }

      // Fetch data only from the same department
      const cursor = await Publication.find({
        $or: [{ department: req.user.department }, { createdBy: req.user._id }],
      }).cursor();

      res.set("Content-Type", "application/json");
      res.set("Transfer-Encoding", "chunked");
      res.write("[");
      let first = true;

      cursor.on("data", (doc) => {
        if (!first) res.write(",");
        else first = false;
        res.write(JSON.stringify(doc));
      });

      cursor.on("end", () => {
        res.write("]");
        res.end();
      });

      cursor.on("error", (err) => {
        res.status(500).json({ error: "Error while streaming data." });
      });
    } catch (error) {
      res.status(500).json({ error: "Error fetching publications." });
    }
  }
);

// Get all workshops by user's contentAccess and department, and send data in chunks
export const getAllWorkshopsByAccess = expressAsyncHandler(async (req, res) => {
  try {
    // Check if user has contentAccess: edit
    if (req.user.contentAccess !== "edit") {
      return res.status(403).json({
        error: "Forbidden: You do not have access to view this content.",
      });
    }

    // Fetch data only from the same department
    const cursor = await Workshop.find({
      $or: [{ department: req.user.department }, { createdBy: req.user._id }],
    }).cursor();

    res.set("Content-Type", "application/json");
    res.set("Transfer-Encoding", "chunked");
    res.write("[");
    let first = true;

    cursor.on("data", (doc) => {
      if (!first) res.write(",");
      else first = false;
      res.write(JSON.stringify(doc));
    });

    cursor.on("end", () => {
      res.write("]");
      res.end();
    });

    cursor.on("error", (err) => {
      res.status(500).json({ error: "Error while streaming data." });
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching workshops." });
  }
});

// Get all project proposals created by the current user
export const getUserProjectProposals = expressAsyncHandler(async (req, res) => {
  try {
    const proposals = await ProjectProposal.find({ createdBy: req.user._id });
    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ error: "Error fetching project proposals." });
  }
});

// Get all conferences created by the current user
export const getUserConferences = expressAsyncHandler(async (req, res) => {
  try {
    const conferences = await Conference.find({ createdBy: req.user._id });
    res.status(200).json(conferences);
  } catch (error) {
    res.status(500).json({ error: "Error fetching conferences." });
  }
});

// Get all consultancies created by the current user
export const getUserConsultancies = expressAsyncHandler(async (req, res) => {
  try {
    const consultancies = await Consultancy.find({ createdBy: req.user._id });
    res.status(200).json(consultancies);
  } catch (error) {
    res.status(500).json({ error: "Error fetching consultancies." });
  }
});

// Get all event competitions created by the current user
export const getUserEventCompetitions = expressAsyncHandler(
  async (req, res) => {
    try {
      const events = await EventCompetition.find({ createdBy: req.user._id });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Error fetching event competitions." });
    }
  }
);

// Get all patents created by the current user
export const getUserPatents = expressAsyncHandler(async (req, res) => {
  try {
    const patents = await Patent.find({ createdBy: req.user._id });
    res.status(200).json(patents);
  } catch (error) {
    res.status(500).json({ error: "Error fetching patents." });
  }
});

// Get all publications created by the current user
export const getUserPublications = expressAsyncHandler(async (req, res) => {
  try {
    const publications = await Publication.find({ createdBy: req.user._id });
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching publications." });
  }
});

// Get all workshops created by the current user
export const getUserWorkshops = expressAsyncHandler(async (req, res) => {
  try {
    const workshops = await Workshop.find({ createdBy: req.user._id });
    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({ error: "Error fetching workshops." });
  }
});
