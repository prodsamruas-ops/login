import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import authAdminMiddleare from "../middleware/authAdminMiddleare.js";

const userRoutes = Router();

userRoutes.get("/", userController.Selection);
userRoutes.post("/:id", userController.create);
userRoutes.delete("/:id", authMiddleware, authAdminMiddleare, userController.delete);
userRoutes.put("/:id", userController.update);

export default userRoutes;