import { Component } from '@angular/core';
import { UserReposService } from './user-repos.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css'],
})
export class UserReposComponent {
  user: string = '';
  userRepos: any = '';
  loading: boolean = true;
  constructor(
    private userReposService: UserReposService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('owner')!;
    });

    this.userReposService
      .getAllRepos(this.user)
      .subscribe(({ data, loading }) => {
        if (data && data.user) {
          this.userRepos = data.user;
          this.loading = loading;
        }
      });
    this.titleService.setTitle(this.user + ' · Repos · GitHub');
  }
}
