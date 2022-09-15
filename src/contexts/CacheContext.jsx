import React, { useState } from "react";

const CacheContext = React.createContext();

const CacheProvider = ({ children }) => {
  const [cache, setCache] = useState([]);

  function addToCache(items) {
    setCache(items);
  }

  return <CacheContext.Provider value={{ cache, addToCache }}>
  {children}
  </CacheContext.Provider>;
}

export {CacheProvider, CacheContext};