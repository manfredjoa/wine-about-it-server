import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/register", controllers.registerUser);
router.get("/", controllers.getUsers);
router.delete("/:_id", controllers.deleteUserById);
router.patch("/:_id/favorites", controllers.updateUserFavoritesById);

export default router;
