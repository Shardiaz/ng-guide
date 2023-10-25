import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@slides/ui';

@Component({
  selector: 'slides-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  public routeSelected(routeName: string) {
    alert(`Route selected ${routeName}`);
  }
}
