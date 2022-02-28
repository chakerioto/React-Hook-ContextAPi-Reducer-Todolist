import { createContext, useContext, useReducer } from "react";

export const MyColorContext = createContext(null);
export const MyColorDispatchContext = createContext(null);

export const useColor = () => {
  const context = useContext(MyColorContext);
  if (context === undefined) {
    throw new Error("useColor must be within a ColorProvider");
  }
  return context;
};

export const useColorDispatch = () => {
  const context = useContext(MyColorDispatchContext);
  if (context === undefined) {
    throw new Error("useColor must be within a ColorProvider");
  }
  return context;
};

export const ColorsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <MyColorContext.Provider value={state}>
      <MyColorDispatchContext.Provider value={dispatch}>
        {children}
      </MyColorDispatchContext.Provider>
    </MyColorContext.Provider>
  );
};

const colorReducer = (state, actions) => {
  switch (actions.type) {
    case "UPDATE_BG":
      return { ...state, currentBg: actions.currentBg };
    default: {
      throw Error("Unknown action: " + actions.type);
    }
  }
};

export const totalColor = [
  { id: 0, color: "#00A3FF" },
  { id: 1, color: "#CC3E34" },
  { id: 2, color: "#E55E2C" },
  { id: 3, color: "#EE9134" },
  { id: 4, color: "#DDCB43" },
  { id: 5, color: "#95DE43" },
  { id: 6, color: "#438EF7" },
  { id: 7, color: "#0c28f5" },
  { id: 8, color: "#292929" },
  { id: 9, color: "#939392" },
  { id: 10, color: "#5c5b5b" },
  { id: 11, color: "#29292A" },
  { id: 12, color: "#37045f" },
  { id: 13, color: "#0c275f" },
  { id: 14, color: "#2c6117" },
  { id: 15, color: "#5e4212" },
  { id: 16, color: "#5f0f0a" },
  { id: 17, color: "#ae232a" },
  { id: 18, color: "#ad236f" },
  { id: 19, color: "#6510f5" },
];

const initialState = {
  totalColor: totalColor,
  currentBg: totalColor[0].color,
};
