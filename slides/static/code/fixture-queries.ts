const directive = fixture.debugElement.query(By.directive(MyComponnet));
const value = directive.model;
const nativeElements = fixture.debugElement.queryAll(By.css('[item]'));
