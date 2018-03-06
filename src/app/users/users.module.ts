import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { MaterialModule } from '../material/material.module';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UserEffects]),
    ReactiveFormsModule
  ],
  providers: [UserService],
  entryComponents: [
    CreateUserComponent,
    DeletePopupComponent
  ],
  declarations: [
    UserListComponent,
    UserPreviewComponent,
    UsersPageComponent,
    CreateUserComponent,
    DeletePopupComponent
  ]
})
export class UsersModule { }
