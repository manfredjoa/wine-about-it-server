import * as controllers from "../controllers/wines.js";

import { Router } from "express";

const router = Router();

router.get("/", controllers.getWines);

router.get("/id/:id", controllers.getWineById);
router.get("/rose", controllers.getWineByRose);
router.get("/red", controllers.getWineByRed);
router.get("/white", controllers.getWineByWhite);
// router.get("/sparkling", controllers.getWineBySparkling);
// router.get("/country/:country", controllers.getWineByCountryState);
// router.get("/suggests/:id", controllers.getSuggestedWines);

// // Pairing Routes: Maybe MVP? Maybe not?
// router.get("/steak-and-grilled", controllers.getWinesForSteakAndGrilled);
// router.get("/seafood", controllers.getWinesForSeafood);
// router.get("/peruvian", controllers.getWinesForPeruvianFood);
// router.get("/chinese", controllers.getWinesForChineseFood);
// router.get("/sushi-and-ramen", controllers.getWinesForSushiAndRamen);
// router.get("/sweets", controllers.getWinesForDesserts);
// router.get("southern", controllers.getWinesForSouthernFood);
// router.get("/indian", controllers.getWinesForIndianFood);

// // other crud routes
// router.delete("/:id", controllers.deleteWineById);
// router.post("/", controllers.createWine);

export default router;
