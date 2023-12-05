import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationDetailsRoutingModule } from './organization-details-routing.module';
import { OrganizationDetailsComponent } from './organization-details.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';


@NgModule({
  declarations: [OrganizationDetailsComponent, SkeletonLoaderComponent],
  imports: [
    CommonModule,
    OrganizationDetailsRoutingModule
  ]
})
export class OrganizationDetailsModule { }
