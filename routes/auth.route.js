import { Router } from "express";
import {
  loginSuperAdmin,
  addUser,
  changePassword,
  userLogin,
} from "../controllers/auth.controller.js";
import { verifyAdmin, verifyUser } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/login", loginSuperAdmin);
router.post("/user-login", userLogin);
router.post("/add-user", verifyAdmin, addUser);
router.post("/change-password", verifyUser, changePassword);

export default router;
