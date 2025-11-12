import express from "express";
import { googleAuth, signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/user/register", signUp);
router.post("/user/login", signIn);
router.post("/user/google-auth", googleAuth);




export default router;