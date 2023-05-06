import React, { useState, type PropsWithChildren, useContext } from "react";
import config from "~/../starter.config.json";
import { type Config } from "../lib/config";

const ConfigContext = React.createContext<Config>(config as Config);

export const ConfigProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [value] = useState<Config>(config as Config);
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
