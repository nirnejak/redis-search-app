import { createIndex } from "../../models/cars";

export default async function handler(req, res) {
  await createIndex(req.body);
  res.status(200).send("ok");
}
