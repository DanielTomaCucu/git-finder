import { Component } from '@angular/core';
import { SpecificRepoService } from './specific-repo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-specific-repo',
  templateUrl: './specific-repo.component.html',
  styleUrls: ['./specific-repo.component.css'],
})
export class SpecificRepoComponent {
  owner: string = '';
  repo: string = '';
  repoData!: any;
  ownerData!: any;
  loading: boolean = true;
  constructor(
    private specificRepoService: SpecificRepoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.owner = params.get('owner')!;
      this.repo = params.get('id')!;
    });

    this.specificRepoService
      .getSpecificRepoInfo(this.owner, this.repo)
      .subscribe(({ data, loading }) => {
        this.loading = loading;

        if (data?.user) {
          this.ownerData = data.user;
          this.repoData = data.repository;
        } else if (data?.organization) {
          this.ownerData = data.organization;
          this.repoData = data.repository;
        }
      });
  }
  goBack() {
    this.location.back();
  }
  redirectToProfile() {
    if (
      (this,
      this.ownerData &&
        this.ownerData.__typename === 'User' &&
        this.loading === false)
    ) {
      this.router.navigate(['/profile/' + this.owner]);
    } else {
      this.router.navigate(['/organization/' + this.owner]);
    }
  }
}
