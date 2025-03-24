//Declaration of Data types

export type DataItem = {
  TEMPERATURE?: number;
  "Window activity"?: string;
  "POWER CONSUMPTION"?: string;
};

export type ImportData = {
  all: DataItem[];
};

export type DataState = {
  roomTemperature: any[];
  windowActivity: any[];
  powerConsumption: any[];
};
