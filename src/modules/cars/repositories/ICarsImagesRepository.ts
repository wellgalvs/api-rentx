import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
  create(car_id: string, car_image: string): Promise<CarImage>;
}

export { ICarsImagesRepository };