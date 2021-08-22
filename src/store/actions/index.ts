import ActionType from "../types";

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

interface Item {
  task: string;
  priority: Priority;
  id: string;
  isActive: boolean;
  label: string;
}

interface LoginAction {
  type: ActionType.LOGIN;
  payload: object;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

interface toggleAction {
  type: ActionType.TOGGLE;
  payload: boolean;
}

interface addItem {
  type: ActionType.ADD_ITEM;
  payload: Item;
}

interface crossItem {
  type: ActionType.CROSS_ITEM;
  payload: string;
}

export type Action =
  | LoginAction
  | LogoutAction
  | toggleAction
  | addItem
  | crossItem;
