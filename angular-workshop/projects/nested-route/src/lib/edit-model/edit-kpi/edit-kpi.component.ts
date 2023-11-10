import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { KPI, KPIType } from '@slides/api';

@Component({
  selector: 'lib-edit-kpi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-kpi.component.html',
  styleUrls: ['./edit-kpi.component.scss'],
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
        options: [],
        type: KPIType.rating,
        description: '',
        id: null,
      })
    );
    this.formArray.markAsTouched();
    this.formArray.markAsDirty();
  }
}
