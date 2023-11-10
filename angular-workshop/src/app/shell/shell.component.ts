import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent, Theme, ThemeSwitchComponent } from '@slides/ui';

@Component({
  selector: 'slides-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent, ThemeSwitchComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  public themes: Theme[] = [
    'purple',
    { key: 'blue', name: 'ocean' },
    { key: 'green', name: 'mint' },
  ];
}
