

//====

const express = require("express");
//const router = express.Router();

import { registerUser } from "../roteHandler/routeHandler.js";

const router = express.Router();
router.post("/register",registerUser);
export default router;