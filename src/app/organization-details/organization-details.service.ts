import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ORGANIZATION_DETAILS } from '../graphql/queries';

interface organization {
  organization: any;
}

@Injectable({
  providedIn: 'root',
})
export class OrganizationDetailsService {
  constructor(private apollo: Apollo) { }
  
  getOrganizationData(owner: string) {
    return this.apollo.watchQuery<organization>({
      query: ORGANIZATION_DETAILS,
      variables: { organization: owner },
    }).valueChanges;
  }
}
