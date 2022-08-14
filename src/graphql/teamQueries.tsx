import gql from "graphql-tag";

//TEAM
export const FIND_TEAM = gql`
  query FindTeam($query: TeamQueryInput!) {
    team(query: $query) {
      _id
      RAS
      SRA
      name
    }
  }
`;
export const UPSERT_TEAM = gql`
  mutation UpsertUser($query: UserQueryInput!, $set: UserUpsertInput!) {
    upsertOneUser(query: $query, set: $set) {
      name
      email
      teams
    }
  }
`;
