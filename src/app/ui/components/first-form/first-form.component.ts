import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {

 constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([
        Validators.required,
        FirstFormComponent.skuValidator,
        Validators.minLength(5)])
      ]
    });

    this.control('sku').valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    });

  }

  myForm: FormGroup;

  static skuValidator(control: FormControl): ValidationErrors | null {
    return control.value.match(/^123/) ? null : {invalidSku: true};
  }

  control(name: string): FormControl {
    return this.myForm.controls[name] as FormControl;
  }

  controlTouchedNotValid(name: string): boolean {
    const c = this.myForm.controls[name] as FormControl;
    return !c.valid && c.touched;
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
