import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RatingService } from '@score/api';
import { switchMap } from 'rxjs';
import { RatingsService } from '../ratings.service';

@Component({
  selector: 'rate-edit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink,
    NgIf,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  public form$ = this.route.paramMap.pipe(
    switchMap(async (params) => {
      const id = params.get('id')!;
      const collectionId = params.get('collectionId')!;
      return this.ratingsService.ratingToForm(
        await this.ratingsService.createEditModel(collectionId, id)
      );
    })
  );

  constructor(
    private ratingsService: RatingsService,
    private ratingAPIService: RatingService,
    private route: ActivatedRoute
  ) {}

  public save(form: FormGroup) {
    const fromValue = this.ratingsService.formGroupToRating(form);
    const save$ = fromValue.id
      ? this.ratingAPIService.update(fromValue)
      : this.ratingAPIService.add(fromValue);

    save$.subscribe(() => form.reset(fromValue));
  }
}
