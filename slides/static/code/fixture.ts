it('should update format', () => {
	const component = fixture.componentInstance;
	component.value = 7;
	fixture.detectChanges();
	const format = fixture.nativeElement.querySelector('.value-format');
	expect(format.textContent).toBe(7);
});

it('should update state', waitForAsync(() => {
	const component = fixture.componentInstance;
	component.value = 7;
	fixture.whenStable().then(() => {
		fixture.detectChanges();
		const state = fixture.nativeElement.querySelector('.value-state');
		expect(state.textContent).toBe('valid');
	});
}));
