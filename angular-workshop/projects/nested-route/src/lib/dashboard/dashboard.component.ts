import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export default class DashboardComponent {}
