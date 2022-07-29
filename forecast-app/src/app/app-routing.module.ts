import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'current',
        loadChildren: () => import('./pages/current/current.module').then(m => m.CurrentModule)
      },
      {
        path: 'forecast/:city',
        loadChildren: () => import('./pages/forecast/forecast.module').then(m => m.ForecastModule)
      },
      {
        path: 'climate/:city',
        loadChildren: () => import('./pages/climate/climate.module').then(m => m.ClimateModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
