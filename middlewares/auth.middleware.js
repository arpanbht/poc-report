import jwt from "jsonwebtoken";
import  SuperAdmin  from "../models/superadmin.model.js";
import expressAsyncHandler from "express-async-handler";

const verifyJWT = expressAsyncHandler(async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    console.log(token);

    if (!token)
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });

    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedInfo);
      
    const admin = await SuperAdmin.findById(decodedInfo?.id).select(
      "-password"
    );

    // console.log(admin)
    if (!admin)
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error?.message || "Unauthorized request",
    });
  }
});

export { verifyJWT };