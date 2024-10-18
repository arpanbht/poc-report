// import bcrypt from "bcryptjs";
import SuperAdmin from "../models/superadmin.model.js";

const createAdmin = async () => {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  const admin = await SuperAdmin.findOne();
  if (admin) {
    console.log("Super Admin already exists");
  }

  const createdAdmin = await SuperAdmin.create({
    username,
    password,
  });
  console.log(createdAdmin);
};

export { createAdmin };
