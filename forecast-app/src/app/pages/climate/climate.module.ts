import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from './../../shared/material.module';
import { ClimateComponent } from './climate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimateRoutingModule } from './climate-routing.module';


@NgModule({
  declarations: [
    ClimateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatPaginatorModule,
    ClimateRoutingModule
  ],
  exports: [
    ClimateComponent
  ]
})
export class ClimateModule { }
