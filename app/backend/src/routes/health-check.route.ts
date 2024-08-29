import { healthCheckController } from "@controllers";
import { Router } from "express";

export const healthCheckRoute: Router = Router();

healthCheckRoute.get("/status", healthCheckController.healthCheck);