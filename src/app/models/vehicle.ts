import { VehicleDetails } from './vehicle-details';
import { Model } from './base-model';

export interface Vehicle extends Model {
    make: string;
    model: string;
    year: number;
}
