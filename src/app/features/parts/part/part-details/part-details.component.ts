import { Component, OnInit } from '@angular/core';
import { PartDetails } from '../../../../models/part-details';
import { ActivatedRoute } from '@angular/router';
import { PartsService } from '../../parts.service';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {

  data: PartDetails[];

  constructor(private readonly route: ActivatedRoute,
              private readonly partsService: PartsService) {
  }

  ngOnInit() {
    this.partsService.details.subscribe(details => {
      this.data = [details];
    });
  }

}
