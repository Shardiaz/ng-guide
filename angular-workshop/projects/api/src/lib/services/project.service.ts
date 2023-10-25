import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [
    {
      description: 'Project with example implementations of angular concepts',
      name: 'angular-workshop',
      lastModified: Date.now(),
      userModified: 'KOS',
      id: '9d844a76-d1e3-4f1b-8375-b667b7f32ac0',
    },
    {
      description: 'App helping to keep track of all kinds of todos',
      name: 'TodoApp',
      lastModified: Date.now(),
      userModified: 'TKO',
      id: '39005518-bce0-4122-abf1-0ab75c1d5a56',
    },
    {
      description:
        'Project enhancing Threlte with several components for easy prototyping',
      name: 'Threlte Enhanced',
      lastModified: Date.now(),
      userModified: 'SHO',
      id: 'aaf6fc6e-c0d3-4ed5-9f49-0f25912c8702',
    },
  ];

  public GetSingle(id: string): Promise<Project> {
    const project = this.projects.find((p) => p.id === id);
    if (!project) return Promise.reject('Not found');

    return Promise.resolve(project);
  }

  public GetMany(top = -1): Promise<Project[]> {
    return Promise.resolve(this.projects.slice(0, top));
  }
}
