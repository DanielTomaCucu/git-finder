import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserReposRoutingModule } from './user-repos-routing.module';
import { UserReposComponent } from './user-repos.component';

@NgModule({
  declarations: [UserReposComponent],
  imports: [CommonModule, UserReposRoutingModule],
})
export class UserReposModule {}
