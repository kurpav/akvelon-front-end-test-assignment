import { Action } from '@ngrx/store';
import { IUser } from '../models/user';

import * as userActions from '../actions/user.actions';

export interface State {
  users: IUser[];
  loading: boolean;
}

export const initialState: State = {
  users: [],
  loading: false,
};

export function reducer(state = initialState, action: userActions.UserActions): State {
  switch (action.type) {
    case userActions.UserActionTypes.LoadAction :
      return { ...state, loading: true };
    case userActions.UserActionTypes.LoadSuccessAction :
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
}
