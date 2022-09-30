import React, { useState } from "react";

const CacheContext = React.createContext();

const CacheProvider = ({ children }) => {
	const [cache, setCache] = useState([]);
	const [idForm, setIdForm] = useState(null);

	function addToCache(items) {
		setCache(items);
	}

	return (
		<CacheContext.Provider value={{ cache, addToCache, setIdForm, idForm }}>
			{children}
		</CacheContext.Provider>
	);
};

export { CacheProvider, CacheContext };
