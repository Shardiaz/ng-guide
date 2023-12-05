import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CollectionService, RatingService } from '@score/api';
import { mockCollectionService } from '../test/collection.service.mock';
import { mockRatingService } from '../test/ratings.service.mock';
import { default as EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    TestBed.overrideProvider(CollectionService, {
      useValue: mockCollectionService(),
    });
    TestBed.overrideProvider(RatingService, {
      useValue: mockRatingService(),
    });

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, EditComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
