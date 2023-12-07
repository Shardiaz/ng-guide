import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from '../model/collection.model';
import { EntityService } from './entity.service';

@Injectable({ providedIn: 'root' })
export class CollectionService extends EntityService<Collection> {
  constructor(http: HttpClient) {
    super(http, 'collection');
  }
}
