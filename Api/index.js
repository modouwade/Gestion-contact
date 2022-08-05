import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./routes/contacts.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () =>
  console.log("mongoDB disconnected!")
);

// middlewwares

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/contacts", contactRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
