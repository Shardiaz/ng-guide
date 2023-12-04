import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, switchMap, throwError, timer } from 'rxjs';
import { Entity } from './model/entity.model';

export function mockBackendInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const { url, method, headers, body } = request;
  if (!isApi(url)) {
    return next(request);
  }

  const randomDelay$ = timer(Math.random() * 300 + 20);

  return randomDelay$.pipe(
    switchMap(() => handleApiRequest(url, method, headers, body))
  );
}

function isApi(url: string) {
  return url.startsWith('/api');
}

function handleApiRequest(
  url: string,
  method: string,
  headers: HttpHeaders,
  body: unknown
): Observable<HttpEvent<unknown>> {
  const [root, api, collection, id] = url.split('/');
  switch (method) {
    case 'GET':
      return getStorage(collection, id);
    case 'PUT':
    case 'POST':
      return pushStorage(collection, body as Entity, id);
    case 'DELETE':
      return removeStorage(collection, id);
  }

  return ok();
}

function ok(body?: unknown) {
  return of(new HttpResponse({ status: 200, body }));
}

function notFound(message: string) {
  return throwError(() => ({ staus: 404, error: { message } }));
}

function getStorage(collection: string, id?: string) {
  const storageData = localStorage.getItem(collectionKey(collection));
  const items: Entity[] = storageData ? JSON.parse(storageData) : [];
  if (id) {
    const found = items.find((item) => item.id === id);
    if (!found) return notFound('unable to get, id not found');
    return ok(found);
  }
  return ok(items);
}
function removeStorage(collection: string, id: string) {
  const storageData = localStorage.getItem(collectionKey(collection));
  const items: Entity[] = storageData ? JSON.parse(storageData) : [];
  localStorage.setItem(
    collectionKey(collection),
    JSON.stringify(items.filter((item) => item.id !== id))
  );
  return ok();
}

function pushStorage(collection: string, body: Entity, id?: string) {
  const storageData = localStorage.getItem(collectionKey(collection));
  const items: Entity[] = storageData ? JSON.parse(storageData) : [];
  if (id) {
    // update
    const existingId = items.findIndex((item) => item.id === id);
    if (existingId < 0) {
      return notFound('unable to update, id not found.');
    }
    items.splice(existingId, 1, body);
    localStorage.setItem(collectionKey(collection), JSON.stringify(items));
    return ok(body);
  } else {
    // add
    const newItem = {
      ...body,
      id: crypto.randomUUID(),
    };
    items.unshift(newItem);
    localStorage.setItem(collectionKey(collection), JSON.stringify(items));
    return ok(body);
  }
}

function collectionKey(collection: string) {
  return `@workshop/${collection}`;
}
