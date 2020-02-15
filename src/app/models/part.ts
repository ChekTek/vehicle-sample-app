import { Model } from './base-model';

export interface Part extends Model {
  name: string;
  category: string;
  vehicleIds: []
}
