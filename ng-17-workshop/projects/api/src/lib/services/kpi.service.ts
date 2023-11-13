import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KPI } from '../model/kpi.model';
import { EntityService } from './entity.service';

@Injectable({ providedIn: 'root' })
export class KPIService extends EntityService<KPI> {
  constructor(http: HttpClient) {
    super(http, 'rating');
  }
}
