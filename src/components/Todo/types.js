// @flow
import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import type { Todo as TodoType } from "../../generated/graphql";

export type PropsBasic = {
  todo: TodoType,
};

export type PropsWrapped = PropsBasic & {
  provided: DraggableProvided,
  snapshot: DraggableStateSnapshot,
};

export type WrapperProps = {|
  todo: TodoType,
  index: number,
|};
