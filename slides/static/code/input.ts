import { Component, Input } from '@angular/core';

@Component({})
export class InputsComponent {
	@Input() value = 0;
	@Input({ required: true }) type: ValueType;
	@Input({ sanitizePattern }) pattern: string;
}

function sanitizePattern(value: string | undefined): string {
	return value?.replace(/\\/g, '/') ?? '*';
}
