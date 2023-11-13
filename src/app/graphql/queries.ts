import { gql } from 'apollo-angular';

export const VIEWER_QUERY = gql`
  query Viewer {
    viewer {
      url
      updatedAt
      company
      avatarUrl
    }
  }
`;
