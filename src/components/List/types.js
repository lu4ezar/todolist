// @flow
import type {
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import type { Todo, Checklist } from "../../generated/graphql";

type List = Array<Todo | Checklist>;

export type Props = {|
  list: List,
  loading: boolean,
  error: Error,
  provided: DroppableProvided,
  snapshot: DroppableStateSnapshot,
|};

export type WrapperProps = {|
  list: List,
  provided: DroppableProvided,
  snapshot: DroppableStateSnapshot,
|};
