import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.users = this.db.list('users');
  }

  add(user: IUser) {
    this.users.push({ ...user });
  }

  update(user: IUser) {
    this.users.update(user.key, user);
  }

  remove(id: string) {
    this.users.remove(id);
  }
}
