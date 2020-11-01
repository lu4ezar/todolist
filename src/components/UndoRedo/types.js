// @flow
export type Props = {
  canUndo: boolean,
  canRedo: boolean,
  undo: () => void,
  redo: () => void,
};
