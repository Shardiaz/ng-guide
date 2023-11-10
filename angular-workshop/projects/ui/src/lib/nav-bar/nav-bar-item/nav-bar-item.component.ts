import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'ui-nav-bar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss'],
})
export class NavBarItemComponent {
  @Input() routeConfig?: Route;
  @HostBinding('style.--shade')
  @Input()
  shade = 0;
}
