import { Component } from '@angular/core';

@Component({
	selector: 'app-component',
	standalone: true,
	template: ` <app-event (selected)="selectEvent()"></app-event>`
})
export class AppComponent {
	public selectEvent() {
		console.log('Event received');
	}
}
