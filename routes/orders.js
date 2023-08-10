import * as controller from "../controllers/orders.js";
import { Router } from "express";

const router = Router();

router.get("/", controller.getOrders);
router.get("/:id", controller.getOrderById);
router.post("/", controller.createOrder);
router.delete("/:id", controller.deleteOrderById);

export default router;
