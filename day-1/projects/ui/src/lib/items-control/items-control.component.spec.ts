import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsControlComponent } from './items-control.component';

describe('ItemsControlComponent', () => {
  let component: ItemsControlComponent;
  let fixture: ComponentFixture<ItemsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
