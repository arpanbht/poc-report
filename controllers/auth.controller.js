import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import User from "../models/user.model.js";
import SuperAdmin from "../models/superadmin.model.js";
// import bcrypt from "bcryptjs";
import { Pass } from "../models/pass.model.js";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Super Admin register
// const createSuperAdmin = asyncHandler(async (req, res) => {
//   const { username, password } = req.body;

//   // Check if a Super Admin already exists
//   const existingAdmin = await SuperAdmin.findOne();
//   if (existingAdmin) {
//     res.status(400);
//     throw new Error("Super Admin already exists");
//   }

//   // Create new Super Admin
//   const superAdmin = await SuperAdmin.create({
//     username,
//     password,
//   });

//   res.status(201).json({
//     success: true,
//     message: "User successfully registered",
//     data: {
//       _id: superAdmin._id,
//       username: superAdmin.username,
//     },
//   });
// });

// Super Admin Login
const loginSuperAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const admin = await SuperAdmin.findOne({ username: username });

  const token = await generateToken(admin?._id);

  if (admin && (await admin.matchPassword(password))) {
    res
      .status(200)
      .set("Authorization", `Bearer ${token}`)
      .json({
        success: true,
        data: {
          _id: admin._id,
          username: admin.username,
          token: token,
        },
        message: "Admin successfully logged in",
      });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// Add user with role
const addUser = asyncHandler(async (req, res) => {
  const { useremail, usercontact, department, college, role, contentAccess } =
    req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ useremail });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists with this email");
  }

  const tempPassword = Math.random().toString(36).slice(-8);
  console.log(tempPassword);

  // Send email with temp password
  await sendEmail(
    useremail,
    "Temporary Password",
    `Your temporary password is ${tempPassword}.`
  );

  // Create a new user
  const user = await User.create({
    useremail,
    usercontact,
    department,
    college,
    password: tempPassword,
    role,
    contentAccess,
  });

  const pass = await Pass.create({
    password: tempPassword,
  });

  console.log(pass);

  if (user && pass) {
    res.status(201).json({
      success: true,
      message: "User successfully registered",
      data: {
        _id: user._id,
        useremail: user.useremail,
        usercontact: user.usercontact,
        department: user.department,
        college: user.college,
        role: user.role,
        contentAccess: user.contentAccess,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Change password
const changePassword = asyncHandler(async (req, res) => {
  const { email, tempPassword, newPassword } = req.body;

  if (!email)
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });

  const user = await User.findOne({ useremail: email });

  // console.log(user);

  if (!user)
    return res.status(404).json({
      success: false,
      message: "User not found",
    });

  const isPassword = await user.matchPassword(tempPassword);
  // console.log(isPassword);

  if (!isPassword)
    return res.status(400).json({
      success: false,
      message: "Wrong password",
    });

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res.status(400).json({
    success: true,
    message: "Password changed successfully",
  });
});

export { loginSuperAdmin, addUser, changePassword };
