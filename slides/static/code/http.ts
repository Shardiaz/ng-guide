import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ItemService {
	constructor(protected http: HttpClient) {}

	public getAll(): Observable<Item[]> {
		return this.http.get<Item[]>(`/api/item`);
	}

	public get(id: string): Observable<Item> {
		return this.http.get<Item>(`/api/item/${id}`);
	}

	public add(body: Item): Observable<Item> {
		return this.http.put<Item>(`/api/item`, body);
	}

	public update(body: Item): Observable<Item> {
		return this.http.post<Item>(`/api/item/${body.id}`, body);
	}

	public delete(id: string): Observable<void> {
		return this.http.delete<void>(`/api/item/${id}`);
	}
}
