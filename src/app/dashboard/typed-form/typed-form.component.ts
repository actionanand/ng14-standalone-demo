import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss'],
  imports: [ReactiveFormsModule]
})
export class TypedFormComponent {

  // to make the old code run in ng 14, use 'UntypedFormGroup' and 'UntypedFormControl'
  // form = new UntypedFormGroup({
  //   email: new UntypedFormControl(null),
  //   age: new UntypedFormControl(null)
  // });

  form = new FormGroup({
    email: new FormControl<string | null>(null),
    age: new FormControl<number | null>(null)
  });

  onSubmit() {
    // good auto completion after 'value' to choose between 'age' & 'email'
    // 'formControl' is generic now. We can specify the value types
    console.log(this.form.value.age! + 1); // adding '!', to ensure that value never be 'null' or 'undefined'
    console.log(this.form.value.email?.length); 
  }
}
