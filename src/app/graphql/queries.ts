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
      createdAt
      isPrivate
      diskUsage
      watchers {
        totalCount
      }

      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }

      openPullRequests: pullRequests(states: OPEN) {
        totalCount
      }
      closedPullRequests: pullRequests(states: CLOSED) {
        totalCount
      }

      branches: refs(refPrefix: "refs/heads/", first: 10) {
        nodes {
          name
        }
      }
      tags: refs(refPrefix: "refs/tags/", first: 10) {
        nodes {
          name
        }
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
      primaryLanguage {
        name
        color
      }
      languages(first: 10) {
        edges {
          node {
            name
            color
          }
        }
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
      repositories(first: 6) {
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
                  color
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

export const ORGANIZATION_REPO = gql`
  query GetOrganizationDetails($organization: String!, $name: String!) {
    repository(owner: $organization, name: $name) {
      name
      description
      url
      stargazerCount
      forkCount
      updatedAt
      createdAt
      isPrivate
      diskUsage
      watchers {
        totalCount
      }

      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }

      openPullRequests: pullRequests(states: OPEN) {
        totalCount
      }
      closedPullRequests: pullRequests(states: CLOSED) {
        totalCount
      }

      branches: refs(refPrefix: "refs/heads/", first: 10) {
        nodes {
          name
        }
      }
      tags: refs(refPrefix: "refs/tags/", first: 10) {
        nodes {
          name
        }
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
      primaryLanguage {
        name
        color
      }
      languages(first: 10) {
        edges {
          node {
            name
            color
          }
        }
      }
    }
    organization(login: $organization) {
      name
      avatarUrl
      repositories(first: 6) {
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
                  color
                }
              }
            }
          }
        }
      }
      membersWithRole(first: 5) {
        nodes {
          login
          avatarUrl
        }
      }
    }
  }
`;
