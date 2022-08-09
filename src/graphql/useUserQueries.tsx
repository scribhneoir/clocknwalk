import { ObjectId } from "bson";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const AddName = gql`
  mutation addName($first: String!, $last: String!) {
    addName(first: $first, last: $last) {
      first
      last
    }
  }
`;

export const addName = async (name: { first: string; last: string }) => {
  const [addNameMutation] = useMutation(AddName);
  const addedName = await addNameMutation({
    variables: {
      name: name,
    },
  });
  return addedName;
};
