import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../../vehicles.service';
import { VehicleDetails } from '../../../../models/vehicle-details';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicleDetails: VehicleDetails;
  data: VehicleDetails[];

  constructor(private readonly route: ActivatedRoute,
              private readonly vehiclesService: VehiclesService) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(async params => {
      const { id } = params;
      this.vehicleDetails = await this.vehiclesService.getDetails(parseInt(id));
      this.data = [this.vehicleDetails];
    });
  }

}
