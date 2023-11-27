import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileBioComponent } from './my-profile-bio/my-profile-bio.component';
import { UserContribuitionComponent } from './user-contribuition/user-contribuition.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    MyProfileComponent,
    MyProfileBioComponent,
    UserContribuitionComponent,
  ],
  imports: [CommonModule, MyProfileRoutingModule, MatTooltipModule],
  exports: [MyProfileBioComponent],
})
export class MyProfileModule {}
