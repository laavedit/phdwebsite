// StoreContext.jsx
import React, { createContext } from "react";

export const StoreContext = createContext(null); // null is the default value

const StoreContextProvider = (props) => {
    const contextValue = {
        // Add your context values here if needed
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
