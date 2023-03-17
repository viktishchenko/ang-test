import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  userData: { user: string; email: string; password: string } = {
    user: '',
    email: '',
    password: '',
  };

  getFormData(data: NgForm) {
    console.log(data.value);
    this.userData = data.value;
  }
}
