import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { IconModule } from '../../icon/icon.module';
import { UserFormModule } from '../../user-form/user-form.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, IconModule, UserFormModule],
})
export class UsersModule {}
