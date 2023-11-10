import { KPI } from './kpi.model';

export interface Collection {
  id?: string;
  name: string;
  description?: string;
  kpis?: Record<string, KPI>;
}
