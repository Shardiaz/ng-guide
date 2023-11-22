import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent, Theme, ThemeSwitchComponent } from '@score/ui';
import {
  NavigationComponent,
  NavigationItem,
} from '../navigation/navigation.component';

@Component({
  selector: 'score-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    NavBarComponent,
    ThemeSwitchComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  @Input() appTitle?: string;

  public navigation: Array<NavigationItem> = [
    {
      key: 'dashboard',
      text: 'Dashboard',
    },
    {
      key: 'settings',
      text: 'Settings',
    },
    {
      key: 'faq',
      text: 'FAQ',
    },
  ];

  public availableThemes: Theme[] = [
    'purple',
    { key: 'blue', name: 'ocean' },
    { key: 'green', name: 'mint' },
  ];

  constructor(private router: Router) {}

  public activate(item: NavigationItem) {
    this.router.navigate([item.key]);
  }
}
