import express from "express";
import { signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/user/register", signUp);
router.post("/user/login", signIn);




export default router;