const person = {
	greet: () => 'Hello'
};

spyOn(person, 'greet');
spyOn(person, 'greet').and.returnValue('Guten Tag');

const personSpy = jasmine.createSpyObj<Person>('Person', ['greet'], ['name', 'birthdate']);
const lastCall = personSpy.greet.calls.mostRecent();
const seventhCallArgs = personSpy.greet.calls.argsFor(7);
