import { Injectable } from '@angular/core';
import { Part } from '../../models/part';
import { PartDetails } from '../../models/part-details';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  mockParts: Part[] = [
    { id: 1, category: 'Air Flow', name: 'Air Filter', vehicleIds: [1, 2, 3] },
    { id: 2, category: 'Fuel', name: 'Fuel Pump', vehicleIds: [1, 4, 6] },
    { id: 3, category: 'Fuel', name: 'Fuel Filter', vehicleIds: [4, 5, 6] }
  ];
  mockPartDetails: PartDetails[] = [
    { partId: 1, cost: 50, description: 'High flow, reusable cotton gauze air filter', subCategory: 'Performance' },
    { partId: 2, cost: 90, description: 'Fuel Pump Module Assembly w/Float Arm', subCategory: 'OEM' },
    { partId: 3, cost: 15, description: 'Protects contaminants from vehicle fuel system', subCategory: 'OEM' }
  ];

  constructor() { }

  async getOne(id: number): Promise<Part> {
    return Promise.resolve(
      this.mockParts.find((part) => {
        return part.id === id;
      })
    );
  }

  async getAll(): Promise<Part[]> {
    return Promise.resolve(this.mockParts);
  }

  async getDetails(id: number): Promise<PartDetails> {
    return Promise.resolve(
      this.mockPartDetails.find(details => {
        return details.partId === id;
      })
    );
  }
}
