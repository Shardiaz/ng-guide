import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NavigationComponent,
  NavigationItem,
} from '../navigation/navigation.component';

@Component({
  selector: 'score-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
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
      key: 'help',
      text: 'FAQ',
    },
  ];

  public activate(item: NavigationItem) {
    alert(item.key);
  }
}
