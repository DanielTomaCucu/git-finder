import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { USER_PROFILE_BIO } from 'src/app/graphql/queries';
interface UserData {
  user: any;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class MyProfileBioService {
  constructor(private apollo: Apollo) {}
  getUserpeofileBio(owner: string) {
    return this.apollo.watchQuery<UserData>({
      query: USER_PROFILE_BIO,
      variables: { username: owner },
    }).valueChanges;
  }
}
