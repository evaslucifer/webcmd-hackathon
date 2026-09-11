import express from "express";
import { handleAgentRequest } from "../controllers/agent.controller.js";

const router = express.Router();

router.post("/", handleAgentRequest);

export default router;
