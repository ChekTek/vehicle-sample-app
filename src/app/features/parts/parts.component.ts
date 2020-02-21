import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VehiclesService } from '../vehicles/vehicles.service';
import { Router } from '@angular/router';
import { Part } from '../../models/part';
import { PartsService } from './parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  parts: Part[] = null;

  constructor(private readonly partsService: PartsService, private readonly router: Router) {
  }

  async ngOnInit() {
    try {
      this.parts = await this.partsService.getAll();
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  }

  navigateToDetails(id: number) {
    this.router.navigate([`parts/${id}`]);
  }
}
