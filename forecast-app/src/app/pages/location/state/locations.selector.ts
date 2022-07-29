import { LocationsState } from "./locations.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getLocationsState = createFeatureSelector<LocationsState>('locations');

export const getLocations = createSelector(getLocationsState, (state) => {
  return state.locations;
});

export const getLocationById = createSelector(getLocationsState, (state: LocationsState, props:any) => {
  return state.locations.find((loc:any) => loc.id === props.id);
});

export const getLocationByCity = createSelector(getLocationsState, (state: LocationsState, props:any) => {
  return state.locations.find((loc:any) => loc.city === props.city);
});
