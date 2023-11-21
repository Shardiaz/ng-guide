import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-event',
	standalone: true,
	template: `<button (click)="selected.emit()"></button>`
})
export class EventComponent {
	@Output() selected = new EventEmitter<void>();
}
