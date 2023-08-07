"use client";

import { useState, createContext } from "react";

export const WaveContext = createContext({
  currentWave: {
    title: null,
    wave_url: null,
  },
  setCurrentWave: null,
});

export const AudioProvider = ({ children }) => {
  const [currentWave, setCurrentWave] = useState({
    title: null,
    wave_url: null,
  });
  console.log(currentWave);
  return (
    <WaveContext.Provider value={(currentWave, setCurrentWave)}>
      {children}
    </WaveContext.Provider>
  );
};
