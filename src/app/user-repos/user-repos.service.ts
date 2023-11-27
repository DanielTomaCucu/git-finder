import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { USER_REPOS } from '../graphql/queries';
interface UserRepos {
user:any
}
@Injectable({
  providedIn: 'root',
})
export class UserReposService {
  constructor(private apollo: Apollo) {}
  getAllRepos(owner: string) {
    return this.apollo.watchQuery<UserRepos>({
      query: USER_REPOS,
      variables: { username: owner, first: 100 },
    }).valueChanges;
  }
}
