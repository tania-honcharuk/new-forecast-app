import { Location } from './../../../models/locations.model';
import { Action } from '@ngrx/store';

export enum LocationActionType {
  ADD_LOCATION = '[LOCATION] add location',
  DELETE_LOCATION = '[LOCATION] delete location',
  GET_LOCATION = '[LOCATION] get location',

}

export class AddLocationAction implements Action {
  readonly type = LocationActionType.ADD_LOCATION;

  constructor(public payload: Location) {}
}

export class DeleteLocationAction implements Action {
  readonly type = LocationActionType.DELETE_LOCATION;

  constructor(public payload: string) {}
}

export class GetLocationAction implements Action {
  readonly type = LocationActionType.GET_LOCATION;

  constructor(public payload: string) {}
}

export type LocationAction = AddLocationAction | DeleteLocationAction | GetLocationAction;
