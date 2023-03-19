import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  emailPattern =
    '([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(.?[A-Za-z0-9]){2}.(com?|net|org|ru)+(.[A-Za-z0-9]{2,4})?';

  loginForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loginUser() {
    console.log('this.loginForm>>', this.loginForm.value);
  }
  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
