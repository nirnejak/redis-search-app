import { Entity, Schema, Repository } from "redis-om";

import { client, connect } from "../utils/redis";

class Car extends Entity {}
let schema = new Schema(
  Car,
  {
    make: { type: "string" },
    modal: { type: "string" },
    image: { type: "string" },
    description: { type: "string", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createCar(data) {
  await connect();
  const repository = new Repository(schema, client);
  const car = repository.createEntity(data);
  const id = await repository.save(car);
  return id;
}

export async function createIndex() {
  await connect();
  const repository = new Repository(schema, client);
  repository.createIndex();
}

export async function searchCars(query) {
  await connect();
  const repository = new Repository(schema, client);
  const cars = await repository
    .search(query)
    .where("make")
    .eq(query)
    .or("model")
    .eq(query)
    .or("description")
    .matches(query)
    .return.all();

  return cars;
}
