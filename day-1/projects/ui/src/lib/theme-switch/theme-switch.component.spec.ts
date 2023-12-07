import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  THEME_ATTRIBUTE,
  ThemeSwitchComponent,
} from './theme-switch.component';
import { Theme } from './theme.model';

describe('ThemeSwitchComponent', () => {
  let component: ThemeSwitchComponent;
  let fixture: ComponentFixture<ThemeSwitchComponent>;
  let storageGetItem: jasmine.Spy;
  const savedTheme = 'savedTheme';

  beforeEach(() => {
    storageGetItem = spyOn(localStorage, 'getItem').and.returnValue(savedTheme);

    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ThemeSwitchComponent],
    });
    fixture = TestBed.createComponent(ThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read the last used theme', () => {
    expect(component.currentTheme).toBe(savedTheme);
    expect(storageGetItem).toHaveBeenCalledWith(THEME_ATTRIBUTE);
  });

  it('should change theme', () => {
    const newTheme = 'newTheme';
    const documentSetAttribute = spyOn(
      document.documentElement,
      'setAttribute'
    );
    const storageSetItem = spyOn(localStorage, 'setItem');

    component.selectTheme(newTheme);

    expect(component.currentTheme).toBe(newTheme);
    expect(storageSetItem).toHaveBeenCalledWith(THEME_ATTRIBUTE, newTheme);
    expect(documentSetAttribute).toHaveBeenCalledWith(
      THEME_ATTRIBUTE,
      newTheme
    );
  });

  it('should accept theme object', () => {
    const newTheme: Theme = { name: 'Purple Rain', key: 'themeObject' };
    const documentSetAttribute = spyOn(
      document.documentElement,
      'setAttribute'
    );
    const storageSetItem = spyOn(localStorage, 'setItem');

    component.selectTheme(newTheme);

    expect(component.currentTheme).toBe(newTheme.key);
    expect(storageSetItem).toHaveBeenCalledWith(THEME_ATTRIBUTE, newTheme.key);
    expect(documentSetAttribute).toHaveBeenCalledWith(
      THEME_ATTRIBUTE,
      newTheme.key
    );
  });
});
