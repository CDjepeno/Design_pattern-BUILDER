import { Car } from '../classes/Car';
import { Manual } from '../classes/Manual';
export interface IBuilder {
  reset(): Car | Manual
  setSeats(n:number): string | number
  setEngine(n: number): string
  setTripComputer(b:boolean): boolean | string
  setGps(b:boolean): boolean | string

}