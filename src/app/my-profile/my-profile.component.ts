import { Component } from '@angular/core';
import { MyProfileService } from './my-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  user: string = '';
  userData: any = '';
  constructor(
    private myProfileService: MyProfileService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('owner')!;
    });
    this.myProfileService.getUserData(this.user).subscribe((data) => {
      console.log(data.data.user);
      this.userData = data.data.user;
    });
  }
}
