import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$?: Observable<IUser[]>;
  isNewUser: boolean = false;

  constructor(private usersData: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.users$ = this.usersData.getUsersList();
  }

  isNewUserTrigger() {
    this.isNewUser = !this.isNewUser;
    this.router.navigate(['/users']);
  }

  Submit(user: IUser) {
    const { name, email, id = 123 } = user;
    console.log('name,email>>', name, email, id);
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
    console.log('reset!!!');
  }
}
