import {
	AfterViewInit,
	Component,
	ContentChild,
	ContentChildren,
	QueryList,
	ViewChild,
	ViewChildren
} from '@angular/core';

@Component({
	template: `
		<app-button>Action1</app-button>
		<app-button>Action2</app-button>
		<app-button>Action3</app-button>
		<input #comment />
		<app-info></app-info>
	`
})
export class CustomCard implements AfterViewInit {
	@ViewChildren(ButtonComponent) actions: QueryList<ButtonComponent>;
	@ViewChild('comment') comment: ElementRef<HTMLInputElement>;
	@ViewChild(InfoComponent) comment: InfoComponent;

	@ContentChild(PageDirective) page: PageDirective;
	@ContentChildren(DataGridColumn) columns: QueryList<DataGridColumn>;

	ngAfterViewInit() {
		this.actions.forEach((button) => {});
		this.columns.forEach((column) => {});
		this.comment.nativeElement.focus();
	}
}
