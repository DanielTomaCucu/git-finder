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
  loading: boolean = true;
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
     .subscribe(({ data, loading }) => {
       this.loading = loading;

       console.log(data);


       if (data?.user) {
         this.repoData = data.user;
       } else if (data?.organization) {
         this.repoData = data.organization;
       }

     });

  }
  goBack() {
    this.location.back();
  }
}
