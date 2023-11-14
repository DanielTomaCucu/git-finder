import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  TOP_FORKED_REPOS_QUERY,
  TOP_STARRED_REPOS_QUERY,
} from '../graphql/queries';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apollo: Apollo) {}
  getMostStarredRepos() {
    return this.apollo.watchQuery<any>({ query: TOP_STARRED_REPOS_QUERY })
      .valueChanges;
  }
  getMostForkedRepos() {
    return this.apollo.watchQuery<any>({ query: TOP_FORKED_REPOS_QUERY })
      .valueChanges;
  }
}
