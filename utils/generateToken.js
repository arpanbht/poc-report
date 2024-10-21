import jwt from "jsonwebtoken";

const generateTokenForAdmin = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const generateTokenForUser = (id, contentAccess, userType, role) => {
  return jwt.sign(
    { id, contentAccess, userType, role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export { generateTokenForAdmin, generateTokenForUser };
