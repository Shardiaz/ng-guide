// enable checking of content's content
export class Component {
	@ContentChildren(Option, { descendants: true }) options: QueryList<Option>;
	@ContentChildren(Option, { read: ElementRef }) options: QueryList<ElementRef<Option>>;
	@ContentChild(DisplayComponnet, { read: TemplateRef }) display: TemplateRef<DisplayComponent>;
	@ContentChild('submit', { static: true }) submit: ElemenRef<HTMLButtonElement>;
}
