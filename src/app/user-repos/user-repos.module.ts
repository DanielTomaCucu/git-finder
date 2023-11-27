import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserReposRoutingModule } from './user-repos-routing.module';
import { UserReposComponent } from './user-repos.component';
import { MyProfileModule } from '../my-profile/my-profile.module';

@NgModule({
  declarations: [UserReposComponent],
  imports: [CommonModule, UserReposRoutingModule, MyProfileModule],
})
export class UserReposModule {}
