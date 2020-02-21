import { Component, OnInit } from '@angular/core';
import { PartDetails } from '../../../../models/part-details';
import { VehicleDetails } from '../../../../models/vehicle-details';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../../../vehicles/vehicles.service';
import { PartsService } from '../../parts.service';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {

  partDetails: PartDetails;
  data: PartDetails[];

  constructor(private readonly route: ActivatedRoute,
              private readonly partsService: PartsService) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(async params => {
      const { id } = params;
      this.partDetails = await this.partsService.getDetails(parseInt(id));
      this.data = [this.partDetails];
    });
  }

}
