import { Model } from './base-model';
import { PartDetails } from './part-details';

export interface Part extends Model {
  name: string;
  category: string;
  vehicleIds: number[];
  details: PartDetails;
}
