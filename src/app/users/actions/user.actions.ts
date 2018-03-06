import { Action } from '@ngrx/store';
import { IUser } from '../models/user';

export enum UserActionTypes {
  RemoveAction = '[User] Remove Action',
  CreateAction = '[User] Create Action',
  LoadAction = '[User] Load Action',
  LoadSuccessAction = '[User] Load Success Action',
  UpdateAction = '[User] Update Action'
}

export class Remove implements Action {
  readonly type = UserActionTypes.RemoveAction;

  constructor(public payload: string) {}
}

export class Create implements Action {
  readonly type = UserActionTypes.CreateAction;

  constructor(public payload: IUser = null) {}
}

export class LoadSuccess implements Action {
  readonly type = UserActionTypes.LoadSuccessAction;

  constructor(public payload: IUser[] = null) {}
}

export class Load implements Action {
  readonly type = UserActionTypes.LoadAction;

  constructor(public payload: any = null) {}
}

export class Update implements Action {
  readonly type = UserActionTypes.UpdateAction;

  constructor(public payload: IUser = null) {}
}

export type UserActions =
  Remove |
  Create |
  Load |
  LoadSuccess |
  Update;
