import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@score/ui';

@Component({
  selector: 'score-home',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
