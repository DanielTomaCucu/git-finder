import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'repo/:owner/:id',
    loadChildren: () =>
      import('./specific-repo/specific-repo.module').then(
        (m) => m.SpecificRepoModule
      ),
  },
  {
    path: 'profile/:owner/repos',
    loadChildren: () =>
      import('./user-repos/user-repos.module').then((m) => m.UserReposModule),
  },
  {
    path: 'profile/:owner',
    loadChildren: () =>
      import('./my-profile/my-profile.module').then((m) => m.MyProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
