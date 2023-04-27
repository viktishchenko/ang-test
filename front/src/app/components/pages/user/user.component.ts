import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
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

  isEdit!: boolean;
  subscription!: Subscription;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private isEditData: DataService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.subscription = this.isEditData.currentEdit.subscribe(
      (v) => (this.isEdit = v)
    );
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
    this.isEditData.getIsEditing(this.isEdit);
  }

  Submit(user: IUser) {
    this.usersService.updateUser(user).subscribe((u) => {
      if (user) {
        console.log(
          'this.route.params>>',
          this.route.params.forEach((el) => console.log('el>>', el))
        );
        // this.change(), this.router.navigate(['/user', user.id]);
        console.log('haloo>>');
      }
    });
  }

  Reset() {
    this.change();
    console.log('edit-reset!!!');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
