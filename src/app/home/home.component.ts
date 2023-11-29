import { ChangeDetectorRef, Component } from '@angular/core';
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
  searchQuery: string = '';
  loading = true;
  searchResults: any;
  searchError: any;
  isDivVisible: boolean = false;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

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
  searchGitHub() {
    this.isDivVisible = true;

    this.homeService.searchGitHub(this.searchQuery).subscribe(
      (result) => {
        this.searchResults = result.data.search.edges;
        this.searchError = null;
        console.log(result.data.search.edges);
      },
      (error) => {
        this.searchError = 'Error occurred while searching.';
      }
    );
  }

  handleClickOutside() {
    this.isDivVisible = false;
    this.cdr.detectChanges();
  }

  getRoute(node: any): string[] {
    if (node.__typename === 'User') {
      return ['/profile', node.login];
    } else if (node.__typename === 'Organization') {
      return ['organization', node.login];
    } else {
      return [''];
    }
  }
}
