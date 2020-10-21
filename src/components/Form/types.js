// @flow
import type { Todo } from "../../generated/graphql";
import type { Mode } from "../../types/mode";

export type Props = {
  todo: Todo,
  mode: Mode,
  submit: () => void,
  closeForm: () => void,
};
