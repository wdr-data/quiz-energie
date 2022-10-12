import React, { useEffect } from "react";
import { useContext } from "react";

import { EnergyPriceContext } from "../../templates/energyPriceContext";

const numberFormatterCent = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatterEuro = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const format = (number, round) => {
  if (round === "cent") {
    return numberFormatterCent.format(number);
  } else if (round === "euro") {
    return numberFormatterEuro.format(number);
  } else {
    return numberFormatterCent.format(number);
  }
};

const SetPriceElectricity = ({ centPerKWh }) => {
  const context = useContext(EnergyPriceContext);
  const { setPriceElectricity } = context;

  useEffect(() => {
    setPriceElectricity(centPerKWh);
  }, [centPerKWh, setPriceElectricity]);

  return null;
};

const SetPriceGas = ({ centPerKWh }) => {
  const context = useContext(EnergyPriceContext);
  const { setPriceGas } = context;

  useEffect(() => {
    setPriceGas(centPerKWh);
  }, [centPerKWh, setPriceGas]);

  return null;
};

export { SetPriceElectricity, SetPriceGas };

const PriceElectricity = () => {
  const context = useContext(EnergyPriceContext);
  const { priceElectricity } = context;

  return <span>{format(priceElectricity)}</span>;
};

const PriceGas = () => {
  const context = useContext(EnergyPriceContext);
  const { priceGas } = context;

  return <span>{format(priceGas)}</span>;
};

export { PriceElectricity, PriceGas };

const CostElectricity = ({ kWh, round = "cent" }) => {
  const context = useContext(EnergyPriceContext);
  const { priceElectricity } = context;

  return <span>{format((priceElectricity * kWh) / 100, round)}</span>;
};

const CostGas = ({ kWh, round = "cent" }) => {
  const context = useContext(EnergyPriceContext);
  const { priceGas } = context;

  return <span>{format((priceGas * kWh) / 100, round)}</span>;
};

export { CostElectricity, CostGas };
