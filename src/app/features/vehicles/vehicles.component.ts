import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from 'src/app/models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = null;
  columnsToDisplay = ['id', 'make', 'model', 'year'];
  constructor(private readonly vehicleService: VehiclesService, private readonly router: Router) { }
  async ngOnInit() {
    try {
      this.vehicles = await this.vehicleService.getAll();
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  }

  navigateToDetails(id: number) {
    console.log(`to route to details ${id}`);
  }
}
