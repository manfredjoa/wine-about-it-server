import { get } from "mongoose";
import WineData from "../models/WineData";

export const getWines = async (req, res) => {
  try {
    let wines = await WineData.find();
    res.json(wines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const getWineById = async (req, res) => {
  try {
    const { id } = req.params;
    const wine = await WineData.findById(id);
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const getWineByCountryState = async (req, res) => {
  try {
    const { CountryState } = req.params;
    const wine = await WineData.find({ CountryState });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getWineByWhite = async (req, res) => {
  try {
    const { White } = req.params;
    const wine = await WineData.find({ White });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getWineByRed = async (req, res) => {
  try {
    const { Red } = req.params;
    const wine = await WineData.find({ Red });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getWineByRose = async (req, res) => {
  try {
    const { Rose } = req.params;
    const wine = await WineData.find({ Rose });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getWineBySparkling = async (req, res) => {
  try {
    const { Sparkling } = req.params;
    const wine = await WineData.find({ Sparkling });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getWineBySuggested = async (req, res) => {
  try {
    const { Suggested } = req.params;
    const wine = await WineData.find({ Suggested });
    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    res.json(wine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
