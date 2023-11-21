import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificRepoRoutingModule } from './specific-repo-routing.module';
import { SpecificRepoComponent } from './specific-repo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SpecificRepoComponent],
  imports: [
    CommonModule,
    SpecificRepoRoutingModule,
    SharedModule
  ]
})
export class SpecificRepoModule { }
