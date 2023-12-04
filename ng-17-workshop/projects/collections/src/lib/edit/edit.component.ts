import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Collection } from '@score/api';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { CollectionsAPIActions } from '../store/collections.actions';
import { collectionsFeature } from '../store/collections.feature';
import { EditKpiComponent } from './edit-kpi/edit-kpi.component';

@Component({
  selector: 'col-edit-model',
  standalone: true,
  imports: [NgIf, AsyncPipe, ReactiveFormsModule, EditKpiComponent, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export default class EditModelComponent implements OnDestroy {
  public form$ = this.store.select(collectionsFeature.selectCollection).pipe(
    filter(isCollection),
    map((item) => {
      return this.fb.group({
        name: item.name,
        description: item.description,
        id: item.id,
        kpis: this.fb.array((item.kpis ?? []).map((kpi) => this.fb.group(kpi))),
      });
    })
  );

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    route: ActivatedRoute
  ) {
    route.paramMap
      .pipe(
        map((params) => params.get('id')),
        filter(isString),
        takeUntil(this.destroy$)
      )
      .subscribe((id) => store.dispatch(CollectionsAPIActions.get({ id })));
  }

  public async save(formGroup: AbstractControl) {
    const formValue = formGroup.value;
    if (formValue.id) {
      this.store.dispatch(
        CollectionsAPIActions.update({ collection: formValue })
      );
    } else {
      this.store.dispatch(CollectionsAPIActions.add({ collection: formValue }));
    }

    formGroup.reset(formValue);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }
}

function isCollection(collection: Collection | null): collection is Collection {
  return collection != null;
}

function isString(param: string | null): param is string {
  return param != null;
}
