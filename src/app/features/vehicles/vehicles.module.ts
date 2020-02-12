import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VehicleComponentComponent } from './vehicle-component/vehicle-component.component';
import { VehicleDetailsComponent } from './vehicle-component/vehicle-details/vehicle-details.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [VehiclesComponent, VehicleDetailsComponent, VehicleComponentComponent],
  imports: [CommonModule, VehiclesRoutingModule, VehiclesRoutingModule, SharedModule]
})
export class VehiclesModule { }
