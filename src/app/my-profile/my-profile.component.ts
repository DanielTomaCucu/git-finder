import { Component } from '@angular/core';
import { MyProfileService } from './my-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  user: string = '';
  userData: any = '';
  loading: boolean = true;
  constructor(
    private myProfileService: MyProfileService,
    private route: ActivatedRoute,
    private titleServce: Title
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('owner')!;
    });
    this.myProfileService
      .getUserData(this.user)
      .subscribe(({ data, loading }) => {
        if (data && data.user) {
          this.userData = data.user;
        }
        this.loading = loading;
      });
    this.titleServce.setTitle(this.user + '  ·  GitHub');
  }
}
