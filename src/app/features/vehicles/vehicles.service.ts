import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleDetails } from '../../models/vehicle-details';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  mockVehicles: Vehicle[] = [
    {
      id: 1,
      make: 'Porsche',
      model: '911 GT3 RS',
      year: 2020
    },
    {
      id: 2,
      make: 'BMW',
      model: 'M2',
      year: 2020
    },
    {
      id: 3,
      make: 'Subaru',
      model: 'WRX STI',
      year: 2020
    }
  ];
  mockDetails: VehicleDetails[] = [
    {
      vehicleId: 1,
      horsepower: 520,
      zeroToSixty: 3.0,
      topSpeed: 193
    },
    {
      vehicleId: 2,
      horsepower: 405,
      zeroToSixty: 4.4,
      topSpeed: 155
    },
    {
      vehicleId: 3,
      horsepower: 310,
      zeroToSixty: 4.7,
      topSpeed: 160
    }
  ];

  constructor() {
  }

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

  async getDetails(id: number): Promise<VehicleDetails> {
    return Promise.resolve(
      this.mockDetails.find(details => {
        return details.vehicleId === id;
      })
    );
  }
}
