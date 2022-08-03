import { ForecastDetails } from "./forecastDetails.model";

export class ForecastData {
  public name?: string
  public details: Array<ForecastDetails> = new Array<ForecastDetails>();
}
