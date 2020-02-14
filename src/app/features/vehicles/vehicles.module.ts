import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [VehiclesComponent, VehicleDetailsComponent, VehicleComponent],
  imports: [CommonModule, VehiclesRoutingModule, VehiclesRoutingModule, SharedModule]
})
export class VehiclesModule { }
