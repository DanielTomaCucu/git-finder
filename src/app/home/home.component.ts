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
  loading = true;
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
  this.homeService.getMostForkedRepos().subscribe(({ data, loading }) => {
    if (data && data.search && data.search.edges) {
      this.mostForked = [...data.search.edges].sort(
        (a, b) => b.node.forkCount - a.node.forkCount
      );
    } else {

      console.error('Data is not in the expected format', data);
    }
    this.loading = loading;
  });


    this.homeService.getMostStarredRepos().subscribe(({ data, loading }) => {
      if (data && data.search && data.search.edges) {
        this.mostStarred = [...data.search.edges].sort(
          (a, b) => b.node.forkCount - a.node.forkCount
        );
      } else {
        console.error('Data is not in the expected format', data);
      }
      this.loading = loading;
    });
  }

  redirectToRepo(owner: string, repo: string) {
    this.router.navigate(['/repo', owner, repo]);
  }
}
