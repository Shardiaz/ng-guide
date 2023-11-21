import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-component',
	standalone: true,
	imports: [RouterOutlet],
	template: `
		<app-header></app-header>
		<app-nav></app-nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {}
