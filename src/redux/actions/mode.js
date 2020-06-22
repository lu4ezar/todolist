// @flow
import type { Mode, ModeAction } from "../../types/mode";
import { SET_MODE } from "./actionTypes";

export const setMode = (mode: Mode): ModeAction => ({
  type: SET_MODE,
  mode
});
