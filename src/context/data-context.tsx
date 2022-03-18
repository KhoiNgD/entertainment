import { Data } from "helpers";
import React from "react";
import state from "../data/data.json";

const DataContext = React.createContext([]);

function DataProvider(props: any) {
  const [data, setData] = React.useState<Data[]>(state);
  const value = [data, setData];

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
