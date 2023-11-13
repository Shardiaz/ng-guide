export interface KPIValue {
  description?: string;
  value: number | string[];
  created: number;
  edited: number;
  createdById: string;
  editedById: string;
}
