import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatRow } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from '@score/api';
import { of } from 'rxjs';
import { mockRatingService } from '../test/ratings.service.mock';
import { default as RatingsComponent } from './ratings.component';

describe('RatingsComponent', () => {
  let component: RatingsComponent;
  let fixture: ComponentFixture<RatingsComponent>;
  const collectionId = 'someId';

  beforeEach(async () => {
    TestBed.overrideProvider(RatingService, {
      useValue: mockRatingService({
        getAll: [
          {
            name: 'one',
            collectionId,
            created: 0,
            createdById: '',
            edited: 0,
            editedById: '',
            values: [],
          },
          {
            name: 'two',
            collectionId: 'some other id',
            created: 0,
            createdById: '',
            edited: 0,
            editedById: '',
            values: [],
          },
          {
            name: 'three',
            collectionId,
            created: 0,
            createdById: '',
            edited: 0,
            editedById: '',
            values: [],
          },
        ],
      }),
    });

    await TestBed.configureTestingModule({
      imports: [RatingsComponent, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => collectionId,
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows for each rating', () => {
    const rows = fixture.debugElement.queryAll(By.directive(MatRow));
    expect(rows.length).toBe(2);
    const containers = fixture.debugElement.queryAll(By.css('tr[mat-Row]'));
    expect(containers.length).toBe(2);
  });
});
