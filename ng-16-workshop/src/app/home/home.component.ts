import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@score/ui';

@Component({
  selector: 'score-home',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
