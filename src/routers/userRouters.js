import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const userRoutes = Router();

userRoutes.get("/", userController.Selection);
userRoutes.post("/:id", userController.create);
userRoutes.delete("/:id", authMiddleware, userController.delete);
userRoutes.put("/:id", userController.update);

export default userRoutes;