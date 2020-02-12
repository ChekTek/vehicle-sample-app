import { VehicleDetails } from './vehicle-details';

export interface Vehicle {
    id: number;
    make: string;
    model: string;
    year: number;
    details: VehicleDetails;
}