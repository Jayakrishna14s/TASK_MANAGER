import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/authRouter.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const appRoutes = () => {
  app.use("/api/auth", authRouter);
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    return "MongoDB is connected";
  } catch (e) {
    return e;
  }
};

app.get("/healthCheck", async (req, res) => {
  const dbStatus = await connectDB();
  res.send(`Hello from Express backend!!!! 🚀 <br/> <p> ${dbStatus} </p> `);
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  appRoutes();
});
