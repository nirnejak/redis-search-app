import { searchCars } from "../../models/cars";

export default async function handler(req, res) {
  const query = req.query.query;
  const cars = await searchCars(query);
  res.status(200).json({ cars });
}
