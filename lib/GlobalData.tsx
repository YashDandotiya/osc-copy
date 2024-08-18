import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://physrisk-api-sandbox.apps.odh-cl1.apps.os-climate.org";

axios.defaults.baseURL = baseUrl;

interface Services {
  apiHost: string;
}

interface Globals {
  inventorySources: string[];
  removeToken(): void;
  services: Services;
  setApiHost(apiHost: string): void;
  setToken(token: string): void;
  token: string;
}

export const globals: Globals = {
  inventorySources: [],
  removeToken: () => {},
  services: { apiHost: "" },
  setApiHost: (apiHost: string) => {},
  setToken: (token: string) => {},
  token: ""
};

export const GlobalDataContext = React.createContext(globals);

export const GlobalDataContextProvider = (props: any) => {
  const [state, setState] = useState({
    inventorySources: ["embedded", "hazard"],
    token: "",
    removeToken: () => {},
    setApiHost: (apiHost: string) => {},
    setToken: (token: string) => {},
    services: { apiHost: baseUrl }
  });

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    setState(prevState => ({
      ...prevState,
      token,
      removeToken: () => {
        localStorage.removeItem("token");
        setState(prevState => ({ ...prevState, token: "" }));
      },
      setToken: (token: string) => {
        localStorage.setItem("token", token);
        setState(prevState => ({ ...prevState, token }));
      }
    }));
  }, []);

  return (
    <GlobalDataContext.Provider value={state}>
      {props.children}
    </GlobalDataContext.Provider>
  );
};
