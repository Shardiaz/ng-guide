import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { CollectionService, RatingService } from '@score/api';
import { mockCollectionService } from '../test/collection.service.mock';
import { mockRatingService } from '../test/ratings.service.mock';
import { default as DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  beforeEach(async () => {
    TestBed.overrideProvider(CollectionService, {
      useValue: mockCollectionService(),
    });
    TestBed.overrideProvider(RatingService, {
      useValue: mockRatingService(),
    });

    await TestBed.configureTestingModule({
      imports: [DashboardComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
