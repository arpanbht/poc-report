import { Router } from "express";
import {
  loginSuperAdmin,
  addUser,
  changePassword,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

// router.post("/create-admin", createSuperAdmin);
router.post("/login", loginSuperAdmin);
router.post("/add-user", verifyJWT, addUser);
router.post("/change-password", verifyJWT, changePassword);

export default router;
