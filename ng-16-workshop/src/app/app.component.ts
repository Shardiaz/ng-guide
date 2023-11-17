import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@Component({
  selector: 'slides-root',
  standalone: true,
  imports: [CommonModule, ShellComponent],
  template: '<slides-shell appTitle="{{title}}"></slides-shell>',
})
export class AppComponent {
  public title = 'Angular 16 workshop';
}
