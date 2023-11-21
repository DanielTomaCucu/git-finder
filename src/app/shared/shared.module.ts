import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderHomeComponent } from './skeleton-loader-home/skeleton-loader-home.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [SkeletonLoaderHomeComponent, RepoComponent],
  exports: [SkeletonLoaderHomeComponent, RepoComponent],
  imports: [CommonModule],
})
export class SharedModule {}
