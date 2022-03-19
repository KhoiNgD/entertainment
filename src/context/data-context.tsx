import { Data, DataAction, DataActionType } from "helpers";
import React, { Dispatch } from "react";
import data from "../data/data.json";

type Context = [data: Data[], setContext: Dispatch<DataAction>];

const initialContext: Context = [
  [],
  (): void => {
    throw new Error("setContext function must be overriden");
  },
];
const DataContext = React.createContext<Context>(initialContext);

function reducer(state: Data[], action: DataAction) {
  const { type, payload } = action;

  if (type === DataActionType.SEARCH && payload) {
    return state.filter((item) =>
      item.title.toLowerCase().includes(payload.toLowerCase())
    );
  }

  return data;
}

function DataProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, data);
  const value = [state, dispatch];

  return <DataContext.Provider value={value} {...props} />;
}

function useData() {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("This component does not nest in Data Context Provider");
  }

  return context;
}

export { DataProvider, useData };
