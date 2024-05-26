export interface CounterType {
  count: number;
}

export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type CounterAction =
  | { type: ActionType.INCREMENT; payload: number }
  | { type: ActionType.DECREMENT; payload: number };
