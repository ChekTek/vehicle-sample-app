import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'parts',
    loadChildren: () => import('./features/parts/parts.module').then(m => m.PartsModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./features/vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
