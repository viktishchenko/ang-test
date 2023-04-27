import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$?: Observable<IUser[]>;
  isNewUser: boolean = false;
  isEdit: boolean | undefined;
  subscription!: Subscription;

  constructor(
    private usersData: UsersService,
    private router: Router,
    private isEditData: DataService
  ) {}

  ngOnInit(): void {
    this.users$ = this.usersData.getUsersList();
    this.subscription = this.isEditData.currentEdit.subscribe(
      (v) => (this.isEdit = v)
    );
  }

  isNewUserTrigger() {
    this.isNewUser = !this.isNewUser;
    console.log('this.isNewUser>>', this.isNewUser);
    this.router.navigate(['/users']);
  }

  Submit(user: IUser) {
    this.usersData.createUser(user).subscribe({
      complete: () => {
        console.log('firstUser>>', user);
        this.isNewUser, this.router.navigate(['/users', user?.id]);
      },
    });
  }

  Reset() {
    this.isNewUserTrigger();
    this.router.navigate(['/users']);
    this.isEdit = false;
    console.log('reset!!!');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
