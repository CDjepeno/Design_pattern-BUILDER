import { IBuilder } from '../interface/IBuilder';
import { Manual } from './Manual';
export class CarManualBuilder implements IBuilder {

  private manual: Manual

  constructor() {
    this.reset()
  }

  reset() {
    return this.manual = new Manual()
  }

  setSeats() {
    return 'véhicule équiper de 4 siège en cuires'
  }

  setEngine(n: number) {
    return `moteur ${n}ch`
  }

  setTripComputer() {
    return 'talbeau de bord en cuir beige'
  }

  setGps() {
    return `GPS 16'9`
  }

  getManual() {
    this.reset()
    return this.manual
  }

}