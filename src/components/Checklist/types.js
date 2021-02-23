// @flow
import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import type { Checklist as ChecklistType } from "../../generated/graphql";

export type Props = {
  checklist: ChecklistType,
  provided: DraggableProvided,
  snapshot: DraggableStateSnapshot,
};

export type WrapperProps = {
  checklist: ChecklistType,
  index: number,
};
