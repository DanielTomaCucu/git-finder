import { Component } from '@angular/core';
import { UserReposService } from './user-repos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css'],
})
export class UserReposComponent {
  user: string = '';
  userRepos: any = '';
  constructor(
    private userReposService: UserReposService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('owner')!;
    });
    this.userReposService.getAllRepos(this.user).subscribe((data) => {
      console.log(data.data.user);
      this.userRepos = data.data.user;
    });
  }
}
