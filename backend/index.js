import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";

dotenv.config();


const app = express();


app.use(express.json());
app.use(cors());
const port = process.env.port;







app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
