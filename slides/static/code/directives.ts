import { Directive, EvenetEmitter, Input, Output } from '@angular/core';
@Directive({
	selector: 'button[fancyButton]',
	standalone: true
})
export class FancyButtonDirective {
	@Input() fancyButton: string;
	@Input() hint: string;
	@Output() success = new EvenetEmitter<void>();
}

@Directive({
	selector: 'my-directive',
	standalone: true
})
export class MyDirective {}
