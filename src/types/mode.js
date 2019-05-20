export type Mode = 'list' | 'edit' | 'form';

export type ModeActions = 'SET_MODE';

export type ModeState = { +type: ModeActions, +mode: Mode };
