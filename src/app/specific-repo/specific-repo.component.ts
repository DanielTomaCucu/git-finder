import { Component } from '@angular/core';
import { SpecificRepoService } from './specific-repo.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private specificRepoService: SpecificRepoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.owner = params.get('owner')!;
      this.repo = params.get('id')!;
    });

    this.specificRepoService
      .getSpecificRepoInfo(this.owner, this.repo)
      .subscribe((data) => {
        console.log(data?.data);
        this.repoData = data.data;
        this.ownerData = data.data || data.data;
      });
  }
  goBack() {
    this.location.back();
  }
}
