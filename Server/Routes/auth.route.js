import express from "express";
import { signup,signin,googleAuth } from "../Controllers/auth.controller.js";
 const router = express.Router();

 router.post('/signup',signup);
 router.post('/signin',signin);
 router.post('/google_auth',googleAuth);

 export default router;