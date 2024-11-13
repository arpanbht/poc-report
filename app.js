import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import eventRouter from "./routes/event.route.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));

// auth route entry point
app.use("/auth", authRouter);

// event route entry point
app.use("/event", eventRouter);


export default app;
