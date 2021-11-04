import { useApolloClient } from "@apollo/client";
import { GET_CHECKLISTS } from "../queries";

export const useGetCompletedCount = () => {
  const client = useApolloClient();
  const queryResult = client.readQuery({ query: GET_CHECKLISTS });
  if (!queryResult) {
    return 0;
  }
  let sum = 0;
  Object.keys(queryResult).forEach((entity) => {
    queryResult[entity].forEach((item) => {
      if (item.completed) {
        sum += 1;
      }
    });
  });
  return sum;
};

export const useGetExpiredCount = () => {
  const client = useApolloClient();
  const queryResult = client.readQuery({ query: GET_CHECKLISTS });
  if (!queryResult) {
    return 0;
  }
  let sum = 0;
  Object.keys(queryResult).forEach((entity) => {
    queryResult[entity].forEach((item) => {
      if (item.expires > Date.now()) {
        sum += 1;
      }
    });
  });
  return sum;
};
