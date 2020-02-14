import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicle: Vehicle;

  constructor(private readonly route: ActivatedRoute,
              private readonly vehiclesService: VehiclesService) {
  }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      const { id } = params;
      this.vehicle = await this.vehiclesService.getOne(parseInt(id));
    });
  }

}
