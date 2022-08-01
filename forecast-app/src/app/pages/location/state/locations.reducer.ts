import { Location } from './../../../models/locations.model';
import { LocationAction, LocationActionType } from './locations.actions';
import { initialState } from './locations.state';

export function LocationsReducer(state: Array<Location> = initialState, action: LocationAction) {
  switch (action.type) {
    case LocationActionType.ADD_LOCATION:
      return [...state, action.payload];
    case LocationActionType.DELETE_LOCATION:
      return state.filter(location => location.id !== action.payload);
    case LocationActionType.GET_LOCATION:
      return state.find(location => location.city === action.payload);
    default:
      return state;
  }
};
