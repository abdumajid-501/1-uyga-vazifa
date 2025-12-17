import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  dark: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { dark: !state.dark };
    default:
      return state;
  }
}

function MainContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default MainContext;
