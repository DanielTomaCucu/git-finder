import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mostStarred: any = [];
  mostForked: any = [];
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.homeService.getMostForkedRepos().subscribe((data) => {
      this.mostForked = [...data.data.search.edges].sort(
        (a, b) => b.node.forkCount - a.node.forkCount
      );
      console.log(data.data.search.edges);
    });

    this.homeService.getMostStarredRepos().subscribe((data) => {
      this.mostStarred = [...data.data.search.edges].sort(
        (a, b) => b.node.stargazerCount - a.node.stargazerCount
      );
      console.log(data.data.search.edges);
    });
  }

  redirectToRepo(owner: string, repo: string) {
    this.router.navigate(['/repo', owner, repo]);
  }
}
