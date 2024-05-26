import { createContext, Dispatch, FC, ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import { CounterAction, CounterType } from "./types";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterContext = createContext<{
  state: CounterType;
  dispatch: Dispatch<CounterAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
