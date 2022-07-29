import { WeatherData } from './weatherData.model'

export class ClimateDetails extends WeatherData {
  public date!: string;
  public humidity!: string;
  public pressure!: number;
  public wind!: number;
  public clouds!: number;
}
