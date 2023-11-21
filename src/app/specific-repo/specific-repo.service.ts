import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SPECIFIC_REPO, ORGANIZATION_REPO } from '../graphql/queries';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


interface SpecificRepoData {

  user?: {
    // Define properties of user
  };
  organization?: {
    // Define properties of organization
  };
  repository: {
    // Define properties of repository
  };
}

@Injectable({
  providedIn: 'root',
})
export class SpecificRepoService {
  isUser: boolean = true;
  constructor(private apollo: Apollo) {}

  getSpecificRepoInfo(owner: string, repo: string) {
    return this.apollo
      .watchQuery<SpecificRepoData>({
        query: SPECIFIC_REPO,
        variables: { owner: owner, name: repo },
      })
      .valueChanges.pipe(
        catchError((error) => {
          this.isUser = false;
          return this.apollo.watchQuery<SpecificRepoData>({
            query: ORGANIZATION_REPO,
            variables: { organization: owner, name: repo },
          }).valueChanges;
        })
      );
  }
}
