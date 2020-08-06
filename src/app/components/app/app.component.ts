import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../interfaces/user.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser;
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, this.passValidator.bind(this));
  }
  get login() {
    return this.form.get('login');
  }
  save(form: FormGroup): void {
    console.log(form);
  }

  onFormSubmit(): void {
    if(this.form.valid) {
      this.user = this.form.value;
      console.log(this.user);
    }
  }
  passValidator(form: FormGroup): null | object {
   const {value: password} = form.controls.password;
   const {value: confirmPassword} = form.controls.confirmPassword;
   return password === confirmPassword ? null : {passwordError: true};
  }
}
