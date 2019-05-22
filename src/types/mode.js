export type Mode = 'list' | 'edit' | 'view';

export type ModeActions = 'SET_MODE';

export type ModeState = { +type: ModeActions, +mode: Mode };
