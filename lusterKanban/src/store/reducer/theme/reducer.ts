import { ITheme } from "../../style";
import { ACTIONS, IAction, IMutation, StateType } from "../interfaces";

export const themeMutation: IMutation<ITheme> = {
    stateReducer: (
      state: StateType<ITheme>,
      action: IAction
    ): StateType<ITheme> => {
      switch (action.type) {
        case ACTIONS.FETCH:
          return action.payload;
        case ACTIONS.ADDED:
          return [...state, action.payload];
        case ACTIONS.CHANGED:
          return state.map((theme) =>
            theme.id === action.payload.id ? action.payload : theme
          );
        case ACTIONS.DELETED:
          return state.filter((theme) => theme.id !== action.payload.id);        
        default:
          return state;
      }
    },
  };
  