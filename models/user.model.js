import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    useremail: { type: String, unique: true, required: true },
    usercontact: { type: String, required: true },
    department: { type: String, required: true },
    college: { type: String, required: true },
    password: { type: String },
    role: { type: String, required: true },
    contentAccess: {
      type: String,
      enum: ["edit", "view"], // Only allows 'edit' or 'view'
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = model("User", userSchema);
export default User;
