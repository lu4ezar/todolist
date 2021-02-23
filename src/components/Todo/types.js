// @flow
import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import type { Todo as TodoType } from "../../generated/graphql";

export type Props = {|
  todo: TodoType,
  provided: DraggableProvided,
  snapshot: DraggableStateSnapshot,
|};

export type WrapperProps = {|
  todo: TodoType,
  index: number,
|};
