// @flow
export type Mode = "list" | "edit" | "view" | "form";

export type ModeActions = "SET_MODE";

export type ModeAction = { type: ModeActions, +mode: Mode };

export type ModeState = { +mode: Mode };
