import Order from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    let orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate("items.wineDataId");
    if (!order) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { items, total, userId, shippingAddress, cartQuantity } = req.body;

    const order = new Order({
      items,
      total,
      userId,
      shippingAddress,
      cartQuantity,
    });
    console.log("Order from backend", order);
    await order.save();

    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOrderByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const wine = await Order.find({ userId: id });
    if (!wine || wine.length === 0) {
      // Updated condition to check if the wine array is empty
      return res
        .status(404)
        .json({ message: "Orders Not Found By User ID:" + userId });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
