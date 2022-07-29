import { LocationsState } from "../pages/location/state/locations.state";

import { locationsReducer } from "../pages/location/state/locations.reducer";

export interface AppState {
  locations: LocationsState;
}

export const appReducer = {
  locations: locationsReducer,
};
