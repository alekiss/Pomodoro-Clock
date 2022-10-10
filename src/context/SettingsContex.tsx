import React, { createContext, useState } from "react";

type SettingsContextProps = {
  children: React.ReactNode;
};

type SettingsContextType = {
  workMinutes: number;
  setWorkMinutes: (newState: number) => void;
  breakMinutes: number;
  setBreakMinutes: (newState: number) => void;
  showSettings: boolean;
  setShowSettings: (newState: boolean) => void;
  handlerButton: () => void;
};

const initialValues = {
  workMinutes: 25,
  setWorkMinutes: () => {},
  breakMinutes: 5,
  setBreakMinutes: () => {},
  showSettings: false,
  setShowSettings: () => {},
  handlerButton: () => {}
};

const SettingsContext = createContext<SettingsContextType>(initialValues);

export const SettingsProvider = ({ children }: SettingsContextProps) => {
  const [workMinutes, setWorkMinutes] = useState(initialValues.workMinutes);
  const [breakMinutes, setBreakMinutes] = useState(initialValues.breakMinutes);
  const [showSettings, setShowSettings] = useState(initialValues.showSettings);

  const handlerButton = () => {
    setShowSettings(prev => !prev);
  };

  return (
    <>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          showSettings,
          setShowSettings,
          handlerButton
        }}
      >
        {children}
      </SettingsContext.Provider>
    </>
  );
};

export default SettingsContext;
