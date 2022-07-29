import { Location } from "../../../models/locations.model";

export interface LocationsState {
  locations: Location[];
}

export const initialState: LocationsState = {
  locations: [
    { id: '1', city: 'New York' },
    { id: '2', city: 'Ohio' },
  ],
};
