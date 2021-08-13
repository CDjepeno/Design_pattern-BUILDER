import { IBuilder } from '../interface/IBuilder';
import { Car } from './Car';
export class CarBuilder implements IBuilder {

  car: Car

  constructor() {
    this.reset()
    this.car = new Car() 
  }

  reset() {
    return new Car()
  }

  setSeats(n: number) {
    return n
  }

  setEngine(n: number) {
    return `moteur ${n}ch`
  }

  setTripComputer(b: boolean) {
    return b
  }

  setGps(b: boolean) {
    return b
  }

  getProduct() {
    this.reset()
    return this.car
  }
}