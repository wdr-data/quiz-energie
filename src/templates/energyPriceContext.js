import React, { useState, useMemo } from "react";

export const EnergyPriceContext = React.createContext({});

export const useEnergyPriceContext = () => {
  // Prices are in cents per kWh
  const [priceElectricity, setPriceElectricity] = useState(0);
  const [priceGas, setPriceGas] = useState(0);
  const context = useMemo(
    () => ({
      priceElectricity,
      setPriceElectricity,
      priceGas,
      setPriceGas,
    }),
    [priceElectricity, setPriceElectricity, priceGas, setPriceGas],
  );

  return context;
};
