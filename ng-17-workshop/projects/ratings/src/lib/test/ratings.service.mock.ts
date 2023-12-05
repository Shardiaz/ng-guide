import { Rating, RatingService } from '@score/api';
import { noop, of } from 'rxjs';

type ReturnValues = Partial<typeof SpyReturnValues>;

export const SpyReturnValues = {
  add: { name: 'add' } as Rating,
  delete: noop(),
  exists: true,
  get: { name: 'get' } as Rating,
  getAll: [{ name: 'one' }, { name: 'two' }] as Rating[],
};

export function mockRatingService(returnValues?: ReturnValues) {
  return jasmine.createSpyObj<RatingService>({
    add: of(returnValues?.add ?? SpyReturnValues.add),
    delete: of(returnValues?.delete ?? SpyReturnValues.delete),
    exists: of(returnValues?.exists ?? SpyReturnValues.exists),
    get: of(returnValues?.get ?? SpyReturnValues.get),
    getAll: of(returnValues?.getAll ?? SpyReturnValues.getAll),
  });
}
