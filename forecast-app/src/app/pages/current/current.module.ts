import { LocationModule } from '../location/location.module';
import { CurrentRoutingModule } from './current-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current.component';



@NgModule({
  declarations: [
    CurrentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CurrentRoutingModule,
    LocationModule
  ],
  exports: [
    CurrentComponent
  ]
})
export class CurrentModule { }
