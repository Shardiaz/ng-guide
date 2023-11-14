import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Entity } from '../model/entity.model';

export abstract class EntityService<T extends Entity> {
  constructor(protected http: HttpClient, protected collection: string) {}

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`/api/${this.collection}`);
  }

  public get(id: string): Observable<T> {
    return this.http.get<T>(`/api/${this.collection}/${id}`);
  }

  public add(body: T): Observable<T> {
    return this.http.put<T>(`/api/${this.collection}`, body);
  }

  public update(body: T): Observable<T> {
    return this.http.post<T>(`/api/${this.collection}/${body.id}`, body);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`/api/${this.collection}/${id}`);
  }

  public exists(id?: string | null): Observable<boolean> | boolean {
    if (!id) return false;

    return this.get(id).pipe(
      map((item) => !!item),
      catchError(() => of(false))
    );
  }
}
