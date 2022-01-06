// @flow
import type { LoginUserInput } from "../../generated/graphql";

export type Props = {
  values: LoginUserInput,
  isSubmitting: boolean,
  setValues: (LoginUserInput, boolean) => void,
};
