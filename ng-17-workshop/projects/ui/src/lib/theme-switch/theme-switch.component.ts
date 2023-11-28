import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Theme } from './theme.model';
import { ThemePipe } from './themes.pipe';

export const THEME_ATTRIBUTE = 'theme';

@Component({
  selector: 'ui-theme-switch',
  standalone: true,
  imports: [ThemePipe, MatSelectModule, MatFormFieldModule],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent {
  @Input() themes: Theme[] = [];
  public currentTheme = 'purple';

  constructor() {
    this.readTheme();
  }

  readTheme() {
    const savedTheme = localStorage.getItem(THEME_ATTRIBUTE);
    if (savedTheme) {
      this.selectTheme(savedTheme);
      return;
    }
  }

  public selectTheme(theme: Theme) {
    const themeKey = ThemePipe.ThemeKey(theme);
    document.documentElement.setAttribute(THEME_ATTRIBUTE, themeKey);
    this.currentTheme = themeKey;
    localStorage.setItem(THEME_ATTRIBUTE, themeKey);
  }
}
