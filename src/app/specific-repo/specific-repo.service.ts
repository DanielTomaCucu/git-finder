import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SPECIFIC_REPO } from '../graphql/queries';

@Injectable({
  providedIn: 'root'
})
export class SpecificRepoService {

  constructor(private apollo: Apollo) { }

  getSpecificRepoInfo(owner:string, repo:string) {
    return this.apollo.watchQuery({
      query: SPECIFIC_REPO, variables: {
      owner:owner, name:repo
    } }).valueChanges;
  }
}
