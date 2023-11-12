import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent, Theme, ThemeSwitchComponent } from '@ui';
import {
  NavigationComponent,
  NavigationItem,
} from '../navigation/navigation.component';

@Component({
  selector: 'score-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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
