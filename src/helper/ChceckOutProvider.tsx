import React, { createContext, useState } from "react";

export const RoomContext = createContext(null);

const ChceckOutProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    function addToCart(itemId) {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId + 1] }));
    }
    function removeFromCart(itemId) {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId - 1] }));
    }

    const contextValue = { cartItem, addToCart, removeFromCart };

    return (
        <RoomContext.Provider value={contextValue}>
            {children}
        </RoomContext.Provider>
    );
};

export default ChceckOutProvider;
