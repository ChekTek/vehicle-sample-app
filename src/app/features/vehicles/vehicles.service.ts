import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  mockVehicles: Vehicle[] = [{
    id: 1, make: 'Porsche', model: '911 GT3 RS', year: 2020,
    details: {
      horsepower: 520,
      zeroToSixy: 3.0,
      topSpeed: 193
    }
  },
  {
    id: 2, make: 'BMW', model: 'M2', year: 2020,
    details: {
      horsepower: 405,
      zeroToSixy: 4.2,
      topSpeed: 155
    }
  },
  {
    id: 3, make: 'Subaru', model: 'WRX STI', year: 2020,
    details: {
      horsepower: 310,
      zeroToSixy: 4.7,
      topSpeed: 160
    }
  }];

  constructor() { }

  async getOne(id: number): Promise<Vehicle> {
    return Promise.resolve(
      this.mockVehicles.find((vehicle) => {
        return vehicle.id === id;
      })
    );
  }

  async getAll(): Promise<Vehicle[]> {
    return Promise.resolve(this.mockVehicles);
  }
}
