import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mostStarred: any = [];
  mostForked: any = [];
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getMostForkedRepos().subscribe((data) => {
      this.mostForked = [...data.data.search.edges].sort(
        (a, b) => b.node.forkCount - a.node.forkCount
      );
    });

    this.homeService.getMostStarredRepos().subscribe((data) => {
      this.mostStarred = [...data.data.search.edges].sort(
        (a, b) => b.node.stargazerCount - a.node.stargazerCount
      );
    });
  }
}
