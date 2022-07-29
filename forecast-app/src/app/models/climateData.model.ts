import { ClimateDetails } from './climateDetails.model';

export class ClimateData {
  public cityName!: string
  public details: Array<ClimateDetails> = new Array<ClimateDetails>();
}
