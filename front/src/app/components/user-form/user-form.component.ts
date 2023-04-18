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
        class="{{ form.invalid ? 'btn btn-secondry' : 'btn btn-primary' }}"
        (click)="submit()"
      >
        {{ btnTitle }}
      </button>
      <button (click)="reset()" class="btn btn-outline-danger float-end">
        Отмена
      </button>
    </form>
  `,
  styles: [
    `
      form {
        max-width: 20rem;
      }
      input.ng-invalid.ng-touched {
        border: red 1px solid;
        box-shadow: 0 0 0 0.25rem rgba(237, 31, 31, 0.25);
      }
      input.ng-valid {
        border: green 1px solid;
        box-shadow: 0 0 0 0.25rem rgba(31, 237, 124, 0.25);
      }
    `,
  ],
})
export class UserFormComponent implements OnInit {
  @Input() user: IUser | undefined;
  @Output() onSubmit: EventEmitter<IUser> = new EventEmitter();
  @Output() onReset: EventEmitter<IUser> = new EventEmitter();

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
  reset() {
    this.onReset.emit();
  }
}
