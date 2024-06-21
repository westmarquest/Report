import { gql } from "@apollo/client";

// Query to get all projects
export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      _id
      name
      image
    }
  }
`;

// Query to get a single project by ID
export const GET_PROJECT = gql`
  query GetProject($projectId: ID!) {
    project(projectId: $projectId) {
      id
      name
      image
    }
  }
`;
