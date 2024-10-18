import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));

app.use("/auth", authRouter);

export default app;
