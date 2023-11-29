import { Component } from '@angular/core';
import { OrganizationDetailsService } from './organization-details.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css'],
})
export class OrganizationDetailsComponent {
  owner: string = '';
  orgDetails: any = '';
  title: string = '';
  constructor(
    private organizationDetailsService: OrganizationDetailsService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.owner = params.get('owner')!;
    });
    this.organizationDetailsService
      .getOrganizationData(this.owner)
      .subscribe((data) => {
        console.log(data.data.organization);
        this.orgDetails = data.data.organization;
      });
    this.titleService.setTitle(this.owner + ' ·  GitHub');
  }
}
