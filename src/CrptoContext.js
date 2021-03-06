import React, { children, createContext, useContext, useState, useEffect } from 'react'

const Crypto = createContext()

const CrptoContext = ({children}) => {

    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol ("$");
    }, [currency]);
    


  return (
      <Crypto.Provider value={{currency , symbol, setCurrency}}>
          {children}
      </Crypto.Provider>
  )
};

export default CrptoContext;

export const CryptoState = () => {
    return useContext(Crypto)
};