import { Component } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@Component({
  selector: 'score-root',
  standalone: true,
  imports: [ShellComponent],
  template:
    '<score-shell class="mat-app-background" appTitle="{{title}}"></score-shell>',
})
export class AppComponent {
  public title = 'Angular 17 workshop';
}
