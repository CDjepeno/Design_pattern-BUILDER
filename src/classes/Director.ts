import { IBuilder } from '../interface/IBuilder';
export class Director {
  // builder: IBuilder

  // constructor(b: IBuilder) {
  //   this.builder = b 
  // }

  constructSportCar(b: IBuilder) {
    b.reset()
    b.setSeats(2)
    b.setEngine(500)
    b.setTripComputer(true)
    b.setGps(true)

    return b
  }

  construct4x4Car(b: IBuilder) {
    b.reset()
    b.setSeats(7)
    b.setEngine(350)
    b.setTripComputer(true)
    b.setGps(true)

    return b
  }

}