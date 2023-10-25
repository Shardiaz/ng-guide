import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav><a>Home</a></nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {}
