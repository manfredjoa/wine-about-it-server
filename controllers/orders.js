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
    const order = await Order.findById(id);
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
    const { items, total, user, shippingAddress, cartQuantity } = req.body;

    const order = new Order({
      items,
      total,
      user,
      shippingAddress,
      cartQuantity,
    });
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
