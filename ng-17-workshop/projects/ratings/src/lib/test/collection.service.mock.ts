import { Collection, CollectionService } from '@score/api';
import { noop, of } from 'rxjs';

type ReturnValues = Partial<typeof SpyReturnValues>;

export const SpyReturnValues = {
  add: { name: 'add' } as Collection,
  delete: noop(),
  exists: true,
  get: { name: 'get' } as Collection,
  getAll: [{ name: 'one' }, { name: 'two' }] as Collection[],
};

export function mockCollectionService(returnValues?: ReturnValues) {
  return jasmine.createSpyObj<CollectionService>({
    add: of(returnValues?.add ?? SpyReturnValues.add),
    delete: of(returnValues?.delete ?? SpyReturnValues.delete),
    exists: of(returnValues?.exists ?? SpyReturnValues.exists),
    get: of(returnValues?.get ?? SpyReturnValues.get),
    getAll: of(returnValues?.getAll ?? SpyReturnValues.getAll),
  });
}
