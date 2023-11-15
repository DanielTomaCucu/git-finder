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
              login
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
              login
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

export const SPECIFIC_REPO = gql`
  query GetRepositoryDetails($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      url
      stargazerCount
      forkCount
      updatedAt
      owner {
        login
        avatarUrl
      }
      primaryLanguage {
        name
        color
      }
      languages(first: 10) {
        edges {
          node {
            name
          }
        }
      }
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
      licenseInfo {
        name
      }
      homepageUrl
      defaultBranchRef {
        name
      }
      releases {
        totalCount
      }

    }
    user(login: $owner) {
      name
      bio
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 5) {
        edges {
          node {
            name
            description
            url
            stargazerCount
            forkCount
            updatedAt
            primaryLanguage {
              name
              color
            }
            languages(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
    }
  }
`;
