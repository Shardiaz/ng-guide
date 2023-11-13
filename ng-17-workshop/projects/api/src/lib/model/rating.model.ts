import { KPIValue } from './kpi-value.model';

export interface Rating {
  id?: string;
  name: string;
  description?: string;
  values: Record<string, KPIValue>;
  created: number;
  edited: number;
  createdById: string;
  editedById: string;
}
