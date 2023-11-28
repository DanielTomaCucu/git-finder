import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderHomeComponent } from './skeleton-loader-home/skeleton-loader-home.component';
import { RepoComponent } from './repo/repo.component';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  declarations: [
    SkeletonLoaderHomeComponent,
    RepoComponent,
    ClickOutsideDirective,
    ClickOutsideDirective,
  ],
  exports: [SkeletonLoaderHomeComponent, RepoComponent, ClickOutsideDirective],
  imports: [CommonModule],
})
export class SharedModule {}
