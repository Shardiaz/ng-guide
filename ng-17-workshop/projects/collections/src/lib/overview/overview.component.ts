import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'col-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export default class OverviewComponent {}
