import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-nav-bar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss'],
})
export class NavBarItemComponent {
  @HostBinding('style.--shade')
  @Input() shade = 0;
}
