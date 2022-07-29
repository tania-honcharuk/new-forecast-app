import { Location } from "../../../models/locations.model";
import { createAction, props } from '@ngrx/store';

export const ADD_LOCATION_ACTION = '[posts page] add post';
export const UPDATE_LOCATION_ACTION = '[posts page] update post';
export const DELETE_LOCATION_ACTION = '[posts page] delete post';

export const addLocation = createAction(
  ADD_LOCATION_ACTION,
  props<{ location: Location }>()
);

export const updateLocation = createAction(
  UPDATE_LOCATION_ACTION,
  props<{ location: Location }>()
);

export const deleteLocation = createAction(
  DELETE_LOCATION_ACTION,
  props<{ id: string }>()
);
