import * as controller from "../controllers/wines.js";

import { Router } from "express";

const router = Router();

// router.get("/", controller.getWines);
// router.get("/:id", controller.getWineById);
// router.get("/rose", controller.getRose);
// router.get("/red", controller.getRed);
// router.get("/white", controller.getWhite);
// router.get("/sparkling", controller.getSparkling);
// router.get("/country/:country", controller.getWineByCountry);
// router.get("/suggests/:id", controller.getSuggestedWines);

// // Pairing Routes: Maybe MVP? Maybe not?
// router.get("/steak-and-grilled", controller.getWinesForSteakAndGrilled);
// router.get("/seafood", controller.getWinesForSeafood);
// router.get("/peruvian", controller.getWinesForPeruvianFood);
// router.get("/chinese", controller.getWinesForChineseFood);
// router.get("/sushi-and-ramen", controller.getWinesForSushiAndRamen);
// router.get("/sweets", controller.getWinesForDesserts);
// router.get("southern", controller.getWinesForSouthernFood);
// router.get("/indian", controller.getWinesForIndianFood);

// // other crud routes
// router.delete("/:id", controller.deleteWineById);
// router.post("/", controller.createWine);

export default router;
