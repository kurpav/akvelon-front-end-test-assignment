import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromUsers from './users.reducer';
import * as fromRoot from '../../reducers';

export interface UsersState {
  users: fromUsers.State;
}

export interface State extends fromRoot.State {
  users: UsersState;
}

export const reducers: ActionReducerMap<UsersState> = {
  users: fromUsers.reducer
};

export const getUsersState = createFeatureSelector<UsersState>('users');
export const getUserEntitiesState = createSelector(
  getUsersState,
  state => state.users
);

export const getUsers = createSelector(
  getUserEntitiesState,
  state => state.users
);
export const isLoading = createSelector(
  getUserEntitiesState,
  state => state.loading
);
