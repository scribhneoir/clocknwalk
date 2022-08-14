import gql from "graphql-tag";

export const FIND_USER = gql`
  query FindUser($query: UserQueryInput!) {
    user(query: $query) {
      _id
      _partition
      email
      name
      teams
      schedule
    }
  }
`;
export const UPSERT_USER = gql`
  mutation UpsertUser($query: UserQueryInput!, $set: UserUpsertInput!) {
    upsertOneUser(query: $query, set: $set) {
      _id
      name
      email
      teams
      schedule
    }
  }
`;
