import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  template: `
    <form [formGroup]="form">
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label
        ><input
          type="text"
          id="name"
          class="form-control"
          formControlName="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label
        ><input
          type="email"
          id="email"
          class="form-control"
          formControlName="email"
        />
      </div>
      <button
        [disabled]="form.invalid"
        class="btn btn-primary"
        (click)="submit()"
      >
        {{ btnTitle }}
      </button>
    </form>
  `,
})
export class UserFormComponent implements OnInit {
  @Input() user: IUser | undefined;
  @Output() onSubmit: EventEmitter<IUser> = new EventEmitter();

  form!: FormGroup;

  btnTitle?: string;

  ngOnInit(): void {
    this.btnTitle = this.user ? 'Редактировать' : 'Создать';
    this.form = new FormGroup({
      name: new FormControl(this.user?.name ?? '', [Validators.required]),
      email: new FormControl(this.user?.email ?? '', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  submit() {
    this.onSubmit.emit({
      ...this.form.value,
    });
  }
}
