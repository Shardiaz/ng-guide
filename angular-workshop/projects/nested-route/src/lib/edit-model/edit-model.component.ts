import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Collection, CollectionService } from '@slides/api';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'lib-edit-model',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss'],
})
export default class EditModelComponent {
  public form$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.collectionService.GetSingle(params.get('id') ?? undefined)
    ),
    map((item) => {
      this.formGroup.reset(item);
      return this.formGroup;
    })
  );
  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {
    this.formGroup = fb.group<Collection>({
      name: '',
      description: '',
      id: '',
      kpis: {},
    });
  }

  public async save() {
    const formValue = this.formGroup.value;
    await this.collectionService.AddOrUpdate(formValue);
    this.formGroup.reset(formValue);
  }
}
