import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path: 'parts',
    loadChildren: () => import('./parts/parts.module').then(m => m.PartsModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
