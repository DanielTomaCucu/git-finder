import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SPECIFIC_REPO, ORGANIZATION_REPO } from '../graphql/queries';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecificRepoService {
  isUser: boolean = true;
  constructor(private apollo: Apollo) {}

  getSpecificRepoInfo(owner: string, repo: string) {
    return this.apollo
      .watchQuery({
        query: SPECIFIC_REPO,
        variables: { owner: owner, name: repo },
      })
      .valueChanges.pipe(
        catchError((error) => {
          this.isUser = false;
          return this.apollo.watchQuery({
            query: ORGANIZATION_REPO,
            variables: { organization: owner, name: repo },
          }).valueChanges;
        })
      );
  }
}
