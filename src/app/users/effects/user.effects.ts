import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { map, tap, delay, switchMap } from 'rxjs/operators';

import * as userActions from '../actions/user.actions';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';


@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadAction),
    delay(2000),
    switchMap(() => this.userService.users.snapshotChanges()),
    map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))),
    map(payload => new userActions.LoadSuccess(<IUser[]>payload))
  );

  @Effect({ dispatch: false })
  createUser$ = this.actions$.pipe(
    ofType(userActions.UserActionTypes.CreateAction),
    map((action: userActions.Create) => action.payload),
    tap(user => this.userService.add(user))
  );

  @Effect({ dispatch: false })
  updateUser$ = this.actions$.pipe(
    ofType(userActions.UserActionTypes.UpdateAction),
    map((action: userActions.Update) => action.payload),
    tap(user => this.userService.update(user))
  );

  @Effect({ dispatch: false })
  removeUser$ = this.actions$.pipe(
    ofType(userActions.UserActionTypes.RemoveAction),
    map((action: userActions.Remove) => action.payload),
    tap(id => this.userService.remove(id))
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
