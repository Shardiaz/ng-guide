import { Pipe, PipeTransform } from '@angular/core';
import { Theme } from './theme.model';

@Pipe({
  name: 'theme',
  standalone: true,
})
export class ThemePipe implements PipeTransform {
  transform(theme: Theme, key: keyof Exclude<Theme, string>): string {
    switch (key) {
      case 'key':
        return ThemePipe.ThemeKey(theme);
      case 'name':
        return ThemePipe.ThemeName(theme);
    }
  }

  public static ThemeKey(theme: Theme): string {
    return typeof theme === 'string' ? theme : theme.key;
  }
  public static ThemeName(theme: Theme): string {
    return typeof theme === 'string' ? theme : theme.name;
  }
}
