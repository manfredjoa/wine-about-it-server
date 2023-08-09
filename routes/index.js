import { Router } from "express";
// import wineRoutes from "./wines.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

// router.use("/wines", wineRoutes);
router.use("/users", usersRoutes);

export default router;
