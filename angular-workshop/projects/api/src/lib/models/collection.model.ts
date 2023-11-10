import { KPI } from './kpi.model';

export interface Collection {
  id?: string | null;
  name: string;
  description?: string;
  kpis?: KPI[];
}
