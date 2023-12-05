import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppService, MySharedModule } from './shared';
import { TestApiService, createTestAppService } from './test';

beforeEach(async () => {
	TesteBed.overrideProvider(AppService, { useFactory: createTestAppService });

	await TestBed.configureTestingModule({
		import: [RouterTestingModule, MySharedModule],
		providers: [{ provide: ApiService, useClass: TestApiService }]
	}).compileComponents();
});
