export type KPIOption = Record<string | number | symbol, string> | number[];

export interface KPI {
  id?: string;
  name: string;
  description?: string;
}
