import { Component, OnInit } from '@angular/core';
import { Part } from '../../../models/part';
import { ActivatedRoute } from '@angular/router';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  part: Part;

  constructor(private readonly route: ActivatedRoute,
              private readonly partsService: PartsService) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      const { id } = params;
      this.part = await this.partsService.getOne(parseInt(id));
    });
  }

}
