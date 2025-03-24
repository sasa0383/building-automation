//This file contains the context for the data that is fetched from the API. It is used to store the data or "sensor readings" and update it when new data is fetched.


"use client";
import { type DataItem, type DataState } from "@/types";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface DataContextType {
  data: DataState;
  updateData: (type: keyof DataState, newData: DataItem[]) => void;
}

const initialState: DataContextType = {
  data: {
    roomTemperature: [],
    windowActivity: [],
    powerConsumption: [],
  },
  updateData: () => {},
};

const DataContext = createContext<DataContextType>(initialState);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataState>(initialState.data);

  const updateData = (type: keyof DataState, newData: DataItem[]) => {
    setData((prevData) => ({
      ...prevData,
      [type]: [...prevData[type], ...newData],
    }));
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => useContext(DataContext);
