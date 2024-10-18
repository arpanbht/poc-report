import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/poc-report`
    );
    console.log("MongoDB Connected", connectionInstance.connection.host);
  } catch (error) {
    console.log("Mongo Error", error);
    process.exit(1);
  }
};

export default connectDB;
