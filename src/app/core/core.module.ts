import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './containers/app/app.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  AppComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule { }
