import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBrowserComponent } from './item-browser.component';

describe('ItemBrowserComponent', () => {
  let component: ItemBrowserComponent<unknown>;
  let fixture: ComponentFixture<ItemBrowserComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBrowserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
