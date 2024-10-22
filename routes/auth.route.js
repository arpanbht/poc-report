import { Router } from "express";
import {
  loginSuperAdmin,
  addUser,
  changePassword,
  userLogin,
  giveAccessToUser,
} from "../controllers/auth.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/auth.middleware.js";
const router = Router();

// admin login
router.post("/login", loginSuperAdmin);

// add user
router.post("/add-user", verifyAdmin, addUser);

// give access permission to user
router.patch("/give-access/:id", verifyAdmin, giveAccessToUser);

// user login
router.post("/user-login", userLogin);

// user change password
router.post("/change-password", verifyUser, changePassword);

export default router;
