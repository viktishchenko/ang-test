import { Component, OnInit } from '@angular/core';
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

  constructor(private usersData: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersData.getUsersData();
  }
}
