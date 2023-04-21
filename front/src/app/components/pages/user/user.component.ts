import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
// export class UserComponent {
export class UserComponent implements OnInit {
  imgSrc: string =
    'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';

  user$?: Observable<IUser>;

  isEdit: boolean = false;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.route.params.subscribe(({ id }) => {
      if (id) this.user$ = this.usersService.getCurrentUser(id);
    });
  }

  delete(userId: number) {
    if (confirm('Удалить пользователя?')) {
      this.usersService.deleteUser(userId).subscribe({
        complete: () => this.router.navigate(['/users']),
      });
    }
  }

  change() {
    this.isEdit = !this.isEdit;
  }

  Submit(user: IUser) {
    console.log('user-edit>>', user);
  }

  Reset() {
    this.change();
    console.log('edit-reset!!!');
  }
}
