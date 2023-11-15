import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificRepoRoutingModule } from './specific-repo-routing.module';
import { SpecificRepoComponent } from './specific-repo.component';


@NgModule({
  declarations: [SpecificRepoComponent],
  imports: [
    CommonModule,
    SpecificRepoRoutingModule
  ]
})
export class SpecificRepoModule { }
