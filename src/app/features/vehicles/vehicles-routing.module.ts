import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclesComponent } from './vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';

const routes: Routes = [
    {
      path: '',
      component: VehiclesComponent,
      children: [
        {
          path: ':id',
          component: VehicleComponent,
          children:[
            {
              path:'details',
              component: VehicleDetailsComponent
            }
          ] }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule {
}
