import { Injectable } from '@angular/core';
import { StorageHelper } from '../helper/storage-helper';
import { Collection } from '../models/collection.model';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  private storage = new StorageHelper<Collection>('collection', (c) => c.id!);

  public GetSingle(id?: string): Promise<Collection> {
    if (!id) return Promise.reject('id must be set');
    return Promise.resolve(this.storage.get(id));
  }

  public GetMany(top?: number): Promise<Collection[]> {
    return Promise.resolve(this.storage.query().slice(0, top));
  }

  public AddOrUpdate(item: Collection) {
    if (!item.id) {
      item.id = crypto.randomUUID();
    }

    return Promise.resolve(this.storage.push(item));
  }
}
