import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Collection } from '@score/api';

type CollectionIdProps = Pick<Collection, 'id'>;
type CollectionProps = { collection: Collection };
type ErrorProps = { error: Error };

export const CollectionsAPIActions = createActionGroup({
  source: 'Collections API',
  events: {
    Add: props<CollectionProps>(),
    AddSuccess: props<CollectionProps>(),
    AddError: props<ErrorProps>(),
    Update: props<CollectionProps>(),
    UpdateSuccess: props<CollectionProps>(),
    UpdateError: props<ErrorProps>(),
    Delete: props<CollectionIdProps>(),
    DeleteSuccess: props<CollectionIdProps>(),
    DeleteError: props<ErrorProps>(),
    Load: emptyProps(),
    LoadSuccess: props<{ collections: Array<Collection> }>(),
    LoadError: props<ErrorProps>(),
    Get: props<CollectionIdProps>(),
    GetSuccess: props<CollectionProps>(),
    GetError: props<ErrorProps>(),
  },
});
