import { Director } from './classes/Director';
import { CarBuilder } from './classes/CarBuilder';
import { Car } from './classes/Car';
export class App {
  static main() {
    const director = new Director()
    const builder = new CarBuilder()
    director.constructSportCar(builder)
    const car: Car = builder.getProduct()
    return car 
  }

}