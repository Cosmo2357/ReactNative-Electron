import React, { useState, createContext } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

export const BadgeContext = createContext();

export const BadgeProvider = (props) => {
  const [homeBadge, setHomeBadge] = useState(null);

  const value = { homeBadge, setHomeBadge };
  return (
    <BadgeContext.Provider value={value}>
      {props.children}
    </BadgeContext.Provider>
  );
};
