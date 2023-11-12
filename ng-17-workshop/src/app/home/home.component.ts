import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@score/ui';

@Component({
  selector: 'score-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
