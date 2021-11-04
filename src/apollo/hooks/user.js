import jwtDecode from "jwt-decode";
import { ApolloLink, useMutation } from "@apollo/client";
import { CREATE_USER, LOGIN_USER } from "../mutations/user";
import { isLoggedInVar } from "../cache";

export const useLoginMutation = () => {
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        const {
          loginUser: { token },
        } = data;
        const user = jwtDecode(token);
        localStorage.setItem("user", JSON.stringify(user));
        isLoggedInVar(true);
      }
    },
    errorPolicy: "all",
    onError: (err) => {
      localStorage.removeItem("user");
      throw new ApolloLink(err.message);
    },
  });
  return {
    loginUser,
    loading,
    error,
  };
};

export const useCreateUserMutation = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      if (data) {
        const {
          createUser: { token },
        } = data;
        const user = jwtDecode(token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
  });
  return {
    createUser,
    loading,
    error,
  };
};
