import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	imports: [ReactiveFormsModule]
})
export class FormComponent {
	constructor(fb: FormBuilder) {
		this.form = fb.group({
			name: ['', Validators.required],
			number: [18, Validators.min(18)],
			description: '',
			details: {
				labels: '',
				options: []
			}
		});
	}
}
