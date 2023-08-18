import express from "express";

import { userSignUp } from "../controllers/user_controller";
const userRoute = express.Router();

userRoute.post("/signup", userSignUp);

export default userRoute;