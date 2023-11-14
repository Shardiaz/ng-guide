import { Injectable } from '@angular/core';
import { CollectionService } from '@slides/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  constructor(private apiService: CollectionService) {}

  public resolveName(id?: string | null) {
    if (!id || id === '-') {
      return 'New collection';
    }
    return this.apiService.get(id).pipe(map((item) => item.name));
  }
}
