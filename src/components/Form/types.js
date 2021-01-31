// @flow
import type { Todo } from "../../generated/graphql";
import type { Mode } from "../../types/mode";

export type Props = {|
  id: ?string,
  entity: __typename,
  mode: Mode,
  submit: (Todo) => void,
  closeForm: () => void,
|};
