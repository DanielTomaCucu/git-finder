import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { USER_PROFILE } from '../graphql/queries';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  constructor(private apollo: Apollo) {}
  getUserData(owner: string) {
    return this.apollo.watchQuery<any>({
      query: USER_PROFILE,
      variables: { username: owner },
    }).valueChanges;
  }
}
