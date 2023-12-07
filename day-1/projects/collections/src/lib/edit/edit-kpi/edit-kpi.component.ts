import { Component } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KPI } from '@score/api';

@Component({
  selector: 'col-edit-kpi',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './edit-kpi.component.html',
  styleUrl: './edit-kpi.component.scss',
})
export class EditKpiComponent {
  public get formArray() {
    return this.controlContainer.control as FormArray<FormGroup>;
  }

  constructor(
    private controlContainer: ControlContainer,
    private fb: FormBuilder
  ) {}

  public delteIndex(index: number) {
    this.formArray.removeAt(index);
    this.formArray.markAsTouched();
    this.formArray.markAsDirty();
  }

  public addItem() {
    this.formArray.push(
      this.fb.group<KPI>({
        name: '',
        description: '',
      })
    );
    this.formArray.markAsTouched();
    this.formArray.markAsDirty();
  }
}
