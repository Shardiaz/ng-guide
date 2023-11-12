import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKpiComponent } from './edit-kpi.component';

describe('EditKpiComponent', () => {
  let component: EditKpiComponent;
  let fixture: ComponentFixture<EditKpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditKpiComponent]
    });
    fixture = TestBed.createComponent(EditKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
