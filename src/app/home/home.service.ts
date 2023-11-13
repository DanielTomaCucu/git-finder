import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { VIEWER_QUERY } from '../graphql/queries';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apollo: Apollo) {}
  gettest() {
    return this.apollo.watchQuery<any>({ query: VIEWER_QUERY }).valueChanges;
  }
}
