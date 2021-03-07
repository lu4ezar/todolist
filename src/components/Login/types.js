// @flow
import type { LoginUserInput } from "../../generated/graphql";

export type Props = {
  values: LoginUserInput,
  isSubmitting: boolean,
  setValues: () => void,
};
