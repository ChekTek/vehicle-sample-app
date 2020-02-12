import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = null;
  columnsToDisplay = ['id', 'make', 'model', 'year'];
  constructor(private readonly vehicleService: VehiclesService) { }
  async ngOnInit() {
    try {
      this.vehicles = await this.vehicleService.getAll();
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  }
}
