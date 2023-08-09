import db from "../db/connection.js";
import WineData from "../models/WineData.js";
import wineRawData from "../json/master.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();
  await WineData.create(wineRawData);
  console.log("data sent");

  await db.close();
};

insertData();
