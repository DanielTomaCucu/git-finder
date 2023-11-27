import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyProfileBioService } from './my-profile-bio.service';

@Component({
  selector: 'app-my-profile-bio',
  templateUrl: './my-profile-bio.component.html',
  styleUrls: ['./my-profile-bio.component.css'],
})
export class MyProfileBioComponent {
  user: string = '';
  userData: any='';
  constructor(
    private myProfileBioService: MyProfileBioService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('owner')!;
    });
    console.log(this.user)
    this.myProfileBioService.getUserpeofileBio(this.user).subscribe((data) => {
      this.userData = data.data.user
    });
  }
}
