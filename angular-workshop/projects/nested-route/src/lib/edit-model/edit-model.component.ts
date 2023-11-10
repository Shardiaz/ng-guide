import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Collection, CollectionService } from '@slides/api';
import { map, switchMap } from 'rxjs';
import { EditKpiComponent } from './edit-kpi/edit-kpi.component';

@Component({
  selector: 'lib-edit-model',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, EditKpiComponent],
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss'],
})
export default class EditModelComponent {
  public item?: Collection;
  public form$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.collectionService.GetSingle(params.get('id') ?? undefined)
    ),
    map((item) => {
      return this.fb.group({
        name: item.name,
        description: item.description,
        id: item.id,
        kpis: this.fb.array((item.kpis ?? []).map((kpi) => this.fb.group(kpi))),
      });
    })
  );

  constructor(
    private fb: FormBuilder,
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  public async save(formGroup: AbstractControl) {
    const formValue = formGroup.value;
    await this.collectionService.AddOrUpdate(formValue);
    formGroup.reset(formValue);
  }
}
