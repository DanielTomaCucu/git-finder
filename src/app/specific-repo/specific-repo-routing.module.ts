import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecificRepoComponent } from './specific-repo.component';

const routes: Routes = [{ path: '', component: SpecificRepoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificRepoRoutingModule {}
