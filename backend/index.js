import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();



app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Corrected port variable
const port = process.env.PORT || 8000;
app.use(cookieParser());
app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
  connectDb();
});
