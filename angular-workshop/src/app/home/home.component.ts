import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@slides/ui';
import { RouterModule } from '@angular/router';
import { ProjectService } from '@slides/api';
import { from } from 'rxjs';

@Component({
  selector: 'slides-home',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public projects$ = from(this.projectService.GetMany(3));
  constructor(private projectService: ProjectService) {}
}
