import { gql } from 'apollo-angular';

export const TOP_STARRED_REPOS_QUERY = gql`
  query TopStarredRepos {
    search(query: "is:public stars:>200000", type: REPOSITORY, last: 9) {
      edges {
        node {
          ... on Repository {
            name
            watchers {
              totalCount
            }
            description
            url
            stargazerCount
            forkCount
            updatedAt
            owner {
              avatarUrl
            }
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export const TOP_FORKED_REPOS_QUERY = gql`
  query TopForkedRepos {
    search(query: "is:public forks:>70000", type: REPOSITORY, last: 9) {
      edges {
        node {
          ... on Repository {
            name

            description
            url
            stargazerCount
            forkCount
            updatedAt
            owner {
              avatarUrl
            }
            watchers {
              totalCount
            }
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;
