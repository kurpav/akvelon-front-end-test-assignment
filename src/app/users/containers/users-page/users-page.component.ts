import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import * as fromUsers from '../../reducers';
import * as userActions from '../../actions/user.actions';
import { MatDialog } from '@angular/material';
import { CreateUserComponent } from '../create-user/create-user.component';
import { IUser } from '../../models/user';
import { DeletePopupComponent } from '../../components/delete-popup/delete-popup.component';

@Component({
  selector: 'an-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  users$: Observable<any>;

  constructor(
    private store: Store<any>,
    public dialog: MatDialog
  ) {
    this.users$ = store.pipe(select(fromUsers.getUsers));
    this.isLoading$ = store.pipe(select(fromUsers.isLoading));
  }

  ngOnInit() {
    this.store.dispatch(new userActions.Load());
  }

  addUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, { width: '400px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new userActions.Create(result));
      }
    });
  }

  onEdit(user: IUser) {
    const dialogRef = this.dialog.open(CreateUserComponent, { width: '400px', data: user });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new userActions.Update({ ...result, key: user.key }));
      }
    });
  }

  onRemove(id: string) {
    const dialogRef = this.dialog.open(DeletePopupComponent, { width: '300px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new userActions.Remove(id));
      }
    });
  }
}
