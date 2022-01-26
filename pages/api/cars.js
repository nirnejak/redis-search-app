import { createCar } from "../../models/cars";

export default async function handler(req, res) {
  const id = await createCar(req.body);
  res.status(200).json({ id });
}
