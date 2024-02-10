// ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextValue {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMode: () => void;
  selectCant:number;
  getCantProducts:()=>number;
  setSelectCant:React.Dispatch<React.SetStateAction<number>>;
  handleCarritoContador:(e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [selectCant, setSelectCant] = useState(0);

  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
    localStorage.setItem('mode', (!mode).toString());
  };

  const getMode=()=>{
    const storedMode = localStorage.getItem('mode');
    return storedMode == 'true' ? true : false;
  }

  const getCantProducts=()=>{
    const cantProducts = localStorage.getItem('cantProducts');
    return cantProducts ? parseInt(cantProducts):0;
  }

  useEffect(() => {
    setMode(getMode());
    getCantProducts()
  }, []);


  const handleCarritoContador=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    const cantidad=parseInt(e.target.value)
    setSelectCant(cantidad)
  }
  
  const value: ThemeContextValue = {
    mode,
    setMode,
    toggleMode,
    selectCant,
    setSelectCant,
    getCantProducts,
    handleCarritoContador,
  };

  return (
    <ThemeContext.Provider value={ value }>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
