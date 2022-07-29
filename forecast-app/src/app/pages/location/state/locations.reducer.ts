import { addLocation, deleteLocation, updateLocation } from "./locations.actions";
import { createReducer, on } from '@ngrx/store';
import { initialState } from "./locations.state";

const _locationsReduser = createReducer(
  initialState,
  on(addLocation, (state, action) => {
    let location = {...action.location};

    location.id = (state.locations.length + 1).toString();
    return {
      ...state,
      locations: [...state.locations, location],
    }
  }),
  on(updateLocation, (state, action) => {
    const updatedLocation = state.locations.map((location) => {
      return action.location.id === location.id ? action.location : location;
    });

    return {
      ...state,
      locations: updatedLocation,
    };
  }),
  on(deleteLocation, (state, { id }) => {
    const updatedLocation = state.locations.filter((location) => {
      return location.id !== id;
    });

    return {
      ...state,
      locations: updatedLocation,
    };
  })
);

export function locationsReducer(state:any, action:any) {
  return _locationsReduser(state, action)
}
