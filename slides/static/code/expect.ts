it('should round the value', ()=>{
	// setup
	const testInput = {...}
	const updateSpy = spyOn(testModule, 'update');
	const resetSpy = spyOn(testModule, 'reset');

	// act
	testedModule.doSomething(testInput)

	// expect
	expect(testModule.result).toBe(7)
	expect(testModule.graph).toEqual({ i: 18, data: 'low'})
	expect(updateSpy).toHaveBeenCalledWith(18);
	expect(resetSpy).not.toHaveBeenCalled(1)
})