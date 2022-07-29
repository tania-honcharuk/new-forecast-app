import { ForecastComponent } from './forecast.component';
import { ForecastRoutingModule } from './forecast-routing.module';
import { MaterialModule } from './../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ForecastRoutingModule,
  ],
  exports: [ForecastComponent]
})
export class ForecastModule { }
