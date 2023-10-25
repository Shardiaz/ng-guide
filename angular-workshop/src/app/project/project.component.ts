import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '@slides/api';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'slides-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  public project$: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    activatedRoute: ActivatedRoute
  ) {
    this.project$ = activatedRoute.paramMap.pipe(
      map((params) => params.get('id') ?? ''),
      filter((projectId) => !!projectId),
      switchMap((projectId) => projectService.GetSingle(projectId))
    );
  }
}
