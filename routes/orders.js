import * as controller from "../controllers/orders.js";
import { Router } from "express";

const router = Router();

router.get("/", controller.getOrders);
router.get("/:id", controller.getOrderById);
router.get("/user/:id", controller.getOrderByUser);
router.post("/", controller.createOrder);
router.delete("/:id", controller.deleteOrderById);

export default router;
