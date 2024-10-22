import mongoose from "mongoose";

const consultancySchema = new mongoose.Schema({
  orderNo: { type: String },
  facultyName: { type: String },
  companyName: { type: String },
  orderAmount: { type: Number },
  orderReceiveDate: { type: Date },
  status: { type: String, enum: ["Ongoing", "Completed"] },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  obtainedScore: {
    type: Number,
    default: 0,
  },
  hasContentAccess: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  department: {
    type: String,
  },
});

const Consultancy = mongoose.model("Consultancy", consultancySchema);

export default Consultancy;
