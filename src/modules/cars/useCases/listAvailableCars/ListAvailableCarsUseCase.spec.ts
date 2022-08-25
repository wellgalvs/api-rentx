import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "ABCD-1234",
      fine_amount: 75,
      brand: "Car_Brand",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "ABCD-1234",
      fine_amount: 75,
      brand: "Car_Brand_Test",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_Test"
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "ABCD-1234",
      fine_amount: 75,
      brand: "Car_Brand_Test",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3"
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car Description",
      daily_rate: 110,
      license_plate: "ABCD-1234",
      fine_amount: 75,
      brand: "Car_Brand_Test",
      category_id: "category_test"
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_test"
    });

    expect(cars).toEqual([car]);
  });
});